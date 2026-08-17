from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REPLACEMENTS = {
    "## 开课前｜数学准备（0或5分钟）": "## 开课前｜数学准备",
    "## 0～2分钟｜为什么要学它？": "## 为什么要学它？",
    "## 2～5分钟｜先猜并设计": "## 先猜并设计",
    "## 2～5分钟｜先猜一猜": "## 先猜一猜",
    "## 5～12分钟｜操作与取证": "## 操作与取证",
    "## 5～10分钟｜看现象 / 做实验": "## 看现象 / 做实验",
    "## 12～15分钟｜整理证据，建立模型": "## 整理证据，建立模型",
    "## 10～14分钟｜把现象画出来，建立模型": "## 把现象画出来，建立模型",
    "## 15～17分钟｜正式物理知识": "## 正式物理知识",
    "## 14～17分钟｜正式物理知识": "## 正式物理知识",
    "## 17～19分钟｜一个典型例题": "## 一个典型例题",
    "## 19～20分钟｜一句话收束": "## 一句话收束",
}


def main() -> None:
    for path in sorted((ROOT / "lessons").glob("L*.md")):
        text = path.read_text(encoding="utf-8")
        for old, new in REPLACEMENTS.items():
            text = text.replace(old, new)
        text = text.replace("一步。\n## 为什么要学它？", "一步。\n\n## 为什么要学它？")
        path.write_text(text, encoding="utf-8")


if __name__ == "__main__":
    main()
