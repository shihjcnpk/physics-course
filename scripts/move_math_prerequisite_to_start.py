from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    for path in sorted((ROOT / "lessons").glob("L*.md")):
        text = path.read_text(encoding="utf-8")
        match = re.search(r"(?s)\n## 数学连接\n\n(.*?)\n## 间隔复习", text)
        if not match:
            raise RuntimeError(f"{path.name} 找不到课末数学连接")
        math_body = match.group(1).strip()
        text = text[:match.start()] + "\n## 间隔复习" + text[match.end():]
        anchor = re.search(r"(?s)(## 今天只学一件事\n\n.*?)(\n## 0～2分钟｜为什么要学它？)", text)
        if not anchor:
            raise RuntimeError(f"{path.name} 找不到课程开头")
        replacement = (
            anchor.group(1)
            + "\n\n## 开课前｜数学准备（0或5分钟）\n\n"
            + math_body
            + anchor.group(2)
        )
        text = text[:anchor.start()] + replacement + text[anchor.end():]
        path.write_text(text, encoding="utf-8")


if __name__ == "__main__":
    main()
