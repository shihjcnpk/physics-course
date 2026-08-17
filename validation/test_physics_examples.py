from __future__ import annotations

import importlib.util
import math
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location("course_generator",ROOT/"scripts/generate_course.py")
mod=importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

formula_lessons=[x for x in mod.LESSONS if x["formula"]!="—"]
core_lessons=[x for x in mod.LESSONS if x["experiment_level"]=="CORE"]
assert {x["formula"] for x in formula_lessons} <= set(mod.FORMULA_CARDS), "公式缺说明卡"
assert {x["id"] for x in core_lessons} == set(mod.CORE_PLANS), "CORE实验缺逐课设计卡"
assert len(mod.STD_TITLES)==89, len(mod.STD_TITLES)
assert len(mod.PEP_CHAPTERS)==22, len(mod.PEP_CHAPTERS)
assert len(mod.PEP_DIRECTORIES)==3, len(mod.PEP_DIRECTORIES)
assert sum(len(chapters) for _,chapters in mod.PEP_DIRECTORIES)==22
assert sum(len(sections) for _,chapters in mod.PEP_DIRECTORIES for _,sections in chapters)==92
assert dict(mod.PEP_CHAPTERS)["九年第21章"]=="电磁波及其应用"
lesson33=next(x for x in mod.LESSONS if x["id"]==33)
assert "同向" in lesson33["core_concept"] and "反向" in lesson33["core_concept"]

checks={
"速度":60/12==5,"平均速度":20/(2+3)==4,"小车速度":0.8/1.6==0.5,
"反射角":90-30==60,"像到人":1+1==2,"天平":50+2.4==52.4,
"密度":178/20==8.9,"石块密度":54/(50-30)==2.7,"重力":2*10==20,
"测力计":math.isclose(3*(1/5),0.6),"压强":600/0.04==15000,"称重浮力":5-3==2,
"阿基米德":0.2*10==2,"机械功":10*3==30,"机械功率":600/3==200,
"杠杆":20*0.1/0.5==4,"效率":80/100==0.8,"比热":2*4200*5==42000,
"燃料":0.1*3e7==3e6,"能量账":100-70==30,"并联电流":0.2+0.3==0.5,
"串联电压":1.2+1.8==3.0,"欧姆":6/3==2,"电压":0.5*12==6,
"电阻":2.4/0.3==8,"电功":220*2*10==4400,"电功率":2.5*0.3==0.75,
"焦耳倍率":2**2==4,"波长":3e8/1e8==3,
}
assert all(checks.values()), [k for k,v in checks.items() if not v]
print(f"PASS: {len(checks)}个数值关系；{len(formula_lessons)}节公式课；{len(core_lessons)}节CORE实验；89项课标；22章映射")
