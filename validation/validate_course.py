from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
errors: list[str] = []
warnings: list[str] = []

lessons = json.loads((ROOT / "data/lessons.json").read_text(encoding="utf-8"))
curriculum = json.loads((ROOT / "data/curriculum.json").read_text(encoding="utf-8"))
expected_standard_ids = set()
for prefix, count in {"1.1":4,"1.2":4,"1.3":4,"2.1":3,"2.2":9,"2.3":6,"2.4":6,"3.1":3,"3.2":4,"3.3":3,"3.4":7,"3.5":3,"3.6":3,"4.1":9,"4.2":12,"5.1":3,"5.2":3,"5.3":3}.items():
    expected_standard_ids.update(f"{prefix}.{i}" for i in range(1,count+1))

required = {
    "lesson_id", "title", "grade", "semester", "big_idea", "importance",
    "curriculum_standard", "pep_mapping", "core_question", "core_concept",
    "core_model", "formula", "math_prerequisite", "math_connection",
    "from_previous", "to_next", "knowledge_links", "experiment_level",
    "visual_required", "estimated_teaching_minutes", "estimated_practice_minutes",
    "difficulty", "common_errors", "review_links",
}
allowed_math = {"无","小数","分数","比","比率","比例","单位换算","时间换算","正负数","方程","坐标系","坐标与方向","坐标图像","图像","图像趋势","几何角","几何直线","垂线","面积","体积","体积差","位置与距离","科学记数法","加法","减法","乘法","除法","百分数","不等式","区间","平方","表格","数量级","排序","方向","空间方向","对称","估算","刻度","大小比较","分类","箭头","相等关系","逻辑推理"}

if len(lessons) != 70:
    errors.append(f"课程数应为70，实际{len(lessons)}")
if len(curriculum) != 89:
    errors.append(f"课标三级主题应为89，实际{len(curriculum)}")
actual_standard_ids={x["id"] for x in curriculum}
if actual_standard_ids != expected_standard_ids:
    errors.append(f"课标编号集合错误：缺{sorted(expected_standard_ids-actual_standard_ids)}，多{sorted(actual_standard_ids-expected_standard_ids)}")

ids = [x["lesson_id"] for x in lessons]
if len(ids) != len(set(ids)):
    errors.append("lesson_id重复")
expected_lesson_ids = [f"L{i:03d}" for i in range(1, 71)]
if ids != expected_lesson_ids:
    errors.append("课程ID或排序不是L001—L070连续序列")

for index, lesson in enumerate(lessons):
    missing = required - lesson.keys()
    if missing:
        errors.append(f"{lesson.get('lesson_id')}缺字段：{sorted(missing)}")
    if lesson["estimated_teaching_minutes"] != 20 or lesson["estimated_practice_minutes"] != 10:
        errors.append(f"{lesson['lesson_id']}不符合20+10")
    if lesson["importance"] not in {"★★★", "★★", "★"}:
        errors.append(f"{lesson['lesson_id']}重要度无效")
    if lesson["experiment_level"] not in {"NONE", "MICRO", "CORE"}:
        errors.append(f"{lesson['lesson_id']}实验等级无效")
    if not lesson["curriculum_standard"]:
        errors.append(f"{lesson['lesson_id']}无课标映射")
    if not lesson["pep_mapping"]:
        errors.append(f"{lesson['lesson_id']}无教材映射")
    if not lesson["math_prerequisite"]:
        errors.append(f"{lesson['lesson_id']}无数学前置")
    unknown_math=set(lesson["math_prerequisite"])-allowed_math
    if unknown_math:
        errors.append(f"{lesson['lesson_id']}数学前置混入非数学工具：{sorted(unknown_math)}")
    if index and not lesson["from_previous"]:
        errors.append(f"{lesson['lesson_id']}无from_previous")
    if index < len(lessons)-1 and not lesson["to_next"]:
        errors.append(f"{lesson['lesson_id']}无to_next")
    path = ROOT / "lessons" / f"{lesson['lesson_id']}.md"
    if not path.exists():
        errors.append(f"缺正文{path.name}")
        continue
    text = path.read_text(encoding="utf-8")
    try:
        frontmatter = yaml.safe_load(text.split("---", 2)[1])
    except Exception as exc:
        errors.append(f"{lesson['lesson_id']} YAML不可解析：{exc}")
        frontmatter = {}
    frontmatter_missing = required - set(frontmatter or {})
    if frontmatter_missing:
        errors.append(f"{lesson['lesson_id']} frontmatter缺字段：{sorted(frontmatter_missing)}")
    for field in required:
        if field in frontmatter and frontmatter[field] != lesson[field]:
            errors.append(f"{lesson['lesson_id']} frontmatter与data不一致：{field}")
    questions = re.findall(r"(?m)^\d+\. \*\*", text)
    if not 4 <= len(questions) <= 6:
        errors.append(f"{lesson['lesson_id']}练习题数{len(questions)}，应4-6")
    for heading in ["今天只学一件事", "建立模型", "正式物理知识", "一个典型例题", "10分钟练习", "为什么错", "数学连接"]:
        if heading not in text:
            errors.append(f"{lesson['lesson_id']}缺正文环节：{heading}")
    if "先猜一猜" not in text and "先猜并设计" not in text:
        errors.append(f"{lesson['lesson_id']}缺正文环节：预测")
    if len(lesson["common_errors"]) < 2:
        errors.append(f"{lesson['lesson_id']}错因不足")
    if lesson["experiment_level"] == "CORE":
        for marker in ["核心实验设计卡", "自变量/主动改变", "因变量/观察测量", "关键控制与规范", "证据记录", "异常数据"]:
            if marker not in text:
                errors.append(f"{lesson['lesson_id']}核心实验缺设计项：{marker}")
    elif "`CORE`实验应在教师或成人指导下完成" in text:
        errors.append(f"{lesson['lesson_id']}非CORE课误带CORE监督标签")
    if lesson["formula"] != "—":
        for marker in ["为什么需要", "量与单位", "怎样变化", "适用边界"]:
            if marker not in text:
                errors.append(f"{lesson['lesson_id']}公式卡缺项：{marker}")
    else:
        if "本课不用计算公式" not in text:
            errors.append(f"{lesson['lesson_id']}无公式课缺少模型边界说明")
    for marker in ["概念判断", "条件辨认", "图示应用", "基础应用", "情境与错因侦探"]:
        if marker not in text:
            errors.append(f"{lesson['lesson_id']}练习结构缺项：{marker}")
    practice_path = ROOT / "exercises" / f"{lesson['lesson_id']}-practice.md"
    if not practice_path.exists():
        errors.append(f"缺独立练习{practice_path.name}")
    else:
        lesson_practice = text.split("## 10分钟练习\n\n", 1)[-1].split("\n## 为什么错", 1)[0].strip()
        standalone = practice_path.read_text(encoding="utf-8").split("\n\n", 1)[-1].strip()
        if lesson_practice != standalone:
            errors.append(f"{lesson['lesson_id']}课内练习与独立练习不同步")

status_counts = Counter(x["status"] for x in curriculum)
bad_status = set(status_counts) - {"COVERED", "PARTIAL", "READING_ONLY", "NOT_APPLICABLE", "NEEDS_SOURCE_VERIFICATION"}
if bad_status:
    errors.append(f"无效课标状态：{sorted(bad_status)}")
for item in curriculum:
    if not item["lessons"] and item["status"] not in {"NOT_APPLICABLE", "NEEDS_SOURCE_VERIFICATION"}:
        errors.append(f"课标{item['id']}无课程")
lesson_standard_ids={sid for lesson in lessons for sid in lesson["curriculum_standard"]}
if not lesson_standard_ids <= actual_standard_ids:
    errors.append(f"课程使用不存在的课标编号：{sorted(lesson_standard_ids-actual_standard_ids)}")

mandatory = [x for x in curriculum if x["id"].startswith("4.1.") or x["id"].startswith("4.2.")]
if len(mandatory) != 21:
    errors.append(f"学生必做实验应21项，实际{len(mandatory)}")
for item in mandatory:
    if not item["lessons"]:
        errors.append(f"必做实验{item['id']}未映射")

pep = (ROOT / "PEP_TEXTBOOK_MAPPING.md").read_text(encoding="utf-8")
pep_rows = re.findall(r"(?m)^\| (?:八上|八下|九年)第\d+章", pep)
if len(pep_rows) != 22:
    errors.append(f"教材章节映射应22章，实际{len(pep_rows)}")
if "VERIFIED_OFFICIAL_2026-08-17" not in pep:
    errors.append("教材目录缺少官方逐页核验状态")
if "九年第21章 电磁波及其应用" not in pep or "九年第21章 信息的传递" in pep:
    errors.append("第二十一章仍含旧目录名称或缺少新版名称")

directory_path = ROOT / "sources" / "PEP_2022_TEXTBOOK_DIRECTORIES.md"
if not directory_path.exists():
    errors.append("缺少三册官方电子教材目录核验记录")
else:
    directory = directory_path.read_text(encoding="utf-8")
    directory_chapters = re.findall(r"(?m)^### 第(?:一|二|三|四|五|六|七|八|九|十|十一|十二|十三|十四|十五|十六|十七|十八|十九|二十|二十一|二十二)章", directory)
    if len(directory_chapters) != 22:
        errors.append(f"官方目录记录应含22章，实际{len(directory_chapters)}")
    directory_sections = re.findall(r"(?m)^\d+\. ", directory)
    if len(directory_sections) != 92:
        errors.append(f"官方目录记录应含92节，实际{len(directory_sections)}")
    if directory.count("跨学科实践：") != 12:
        errors.append(f"新版目录应记录12项跨学科实践，实际{directory.count('跨学科实践：')}")

lesson_33 = next((x for x in lessons if x["lesson_id"] == "L033"), None)
if not lesson_33 or "二力的合成" not in lesson_33["title"] or "同向" not in lesson_33["core_concept"] or "反向" not in lesson_33["core_concept"]:
    errors.append("L033未完整覆盖新版教材与课标2.2.4的同一直线二力合成")

graph=json.loads((ROOT/"data/knowledge_graph.json").read_text(encoding="utf-8"))
graph_node_ids={x["id"] for x in graph["nodes"]}
if graph_node_ids != set(ids):
    errors.append("知识图谱课程节点与课程ID不一致")
if len(graph["edges"]) != len(lessons)-1:
    errors.append("知识图谱顺序依赖边数量错误")
for edge in graph["edges"]:
    if edge["from"] not in graph_node_ids or edge["to"] not in graph_node_ids:
        errors.append(f"知识图谱悬空边：{edge}")

visuals=json.loads((ROOT/"data/visual_registry.json").read_text(encoding="utf-8"))
if {x["lesson_id"] for x in visuals} != set(ids):
    errors.append("视觉注册表未一课一项")
if any(len(x.get("accuracy_checks",[]))<5 for x in visuals):
    errors.append("视觉注册项科学检查不足")

placeholder_pattern = re.compile(r"TODO|TBD|PLACEHOLDER|注意力有问题|ADHD", re.IGNORECASE)
for path in [*ROOT.glob("*.md"), *(ROOT / "lessons").glob("*.md"), *(ROOT / "exercises").glob("*.md")]:
    content = path.read_text(encoding="utf-8")
    if placeholder_pattern.search(content):
        errors.append(f"{path.relative_to(ROOT)}含占位符或不应面向孩子出现的标签")
    for target in re.findall(r"\[[^\]]+\]\(([^)]+)\)", content):
        if target.startswith(("http://", "https://", "#", "mailto:")):
            continue
        clean_target = target.split("#", 1)[0]
        if clean_target and not (path.parent / clean_target).resolve().exists():
            errors.append(f"{path.relative_to(ROOT)}含失效相对链接：{target}")

report = {
    "lessons": len(lessons),
    "curriculum_items": len(curriculum),
    "mandatory_experiments": len(mandatory),
    "pep_chapters": len(pep_rows),
    "pep_sections": len(re.findall(r"(?m)^\d+\. ", directory)) if directory_path.exists() else 0,
    "importance": dict(Counter(x["importance"] for x in lessons)),
    "experiment_levels": dict(Counter(x["experiment_level"] for x in lessons)),
    "curriculum_status": dict(status_counts),
    "errors": errors,
    "warnings": warnings,
    "result": "PASS" if not errors else "FAIL",
    "checks": ["YAML与JSON一致", "CORE实验四变量与异常值", "公式六问的核心四项", "五类练习", "课内外练习同步", "Markdown相对链接", "20+10与逻辑链", "三册新版官方目录与二力合成"],
}
(ROOT / "validation/report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
print(json.dumps(report, ensure_ascii=False, indent=2))
sys.exit(1 if errors else 0)
