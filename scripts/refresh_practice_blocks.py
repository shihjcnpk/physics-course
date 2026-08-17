from __future__ import annotations

import re
from pathlib import Path

from generate_course import LESSONS, error_feedback, exercise_block


ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    for lesson in LESSONS:
        lesson_id = lesson["lesson_id"]
        block = exercise_block(lesson).rstrip()
        lesson_path = ROOT / "lessons" / f"{lesson_id}.md"
        text = lesson_path.read_text(encoding="utf-8")
        updated, count = re.subn(
            r"(?s)(## 10分钟练习\s*\n\s*).*?(\n\s*## 为什么错)",
            lambda match: f"{match.group(1)}{block}{match.group(2)}",
            text,
            count=1,
        )
        if count != 1:
            raise RuntimeError(f"{lesson_id} 未找到唯一练习区块")
        updated, count = re.subn(
            r"(?s)(## 为什么要学它？\s*\n\s*).*?(?=\n## )",
            lambda match: f"{match.group(1)}想一想这个生活场景：{lesson['activity']}。\n",
            updated,
            count=1,
        )
        if count != 1:
            raise RuntimeError(f"{lesson_id} 未找到唯一导入区块")
        feedback = "\n".join([
            error_feedback(lesson["common_errors"][0]),
            error_feedback(lesson["common_errors"][1]),
            '- **做题中途漏条件**：在题目旁画“对象—条件—单位”三格，完成一格勾一格。',
        ])
        updated, count = re.subn(
            r"(?s)(## 为什么错\s*\n\s*).*?(?=\n## 和上一课的关系)",
            lambda match: f"{match.group(1)}{feedback}\n",
            updated,
            count=1,
        )
        if count != 1:
            raise RuntimeError(f"{lesson_id} 未找到唯一错因区块")
        updated, count = re.subn(
            r"(?s)(## 间隔复习\s*\n\s*).*\Z",
            lambda match: (
                f"{match.group(1)}当天口述核心句；第2天做一道基础题；第3天换一个情境；"
                "第7天和相邻模型一起练；第14天不看卡片解释一次。"
                "复习优先处理真正出错的步骤，不重复抄答案。\n"
            ),
            updated,
            count=1,
        )
        if count != 1:
            raise RuntimeError(f"{lesson_id} 未找到唯一间隔复习区块")
        lesson_path.write_text(updated, encoding="utf-8")

        practice_path = ROOT / "exercises" / f"{lesson_id}-practice.md"
        practice_path.write_text(
            f"# {lesson_id}｜{lesson['title']}｜10分钟练习\n\n{block}\n",
            encoding="utf-8",
        )


if __name__ == "__main__":
    main()
