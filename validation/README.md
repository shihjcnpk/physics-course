# 课程自动质量检查

运行：

```powershell
python validation/validate_course.py
```

检查范围：70课连续编号、YAML/JSON一致、必填元数据、20+10、4～6题、重要度、数学前置、前后逻辑、课标映射、21项学生必做实验、22章教材映射、课内/独立练习同步、相对链接、占位符及版本核验标记。

数值与设计卡回归：

```powershell
python validation/test_physics_examples.py
```

该测试复核29个典型数值关系、全部29节公式课、23节CORE实验设计卡、89项课标编号和22章教材映射。内容负荷还须结合人工审查；视觉语义必须在最终SVG/动画完成后逐图检查。
