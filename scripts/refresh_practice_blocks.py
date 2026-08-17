from __future__ import annotations

import re
from pathlib import Path

from generate_course import LESSONS, exercise_block


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
        lesson_path.write_text(updated, encoding="utf-8")

        practice_path = ROOT / "exercises" / f"{lesson_id}-practice.md"
        practice_path.write_text(
            f"# {lesson_id}｜{lesson['title']}｜10分钟练习\n\n{block}\n",
            encoding="utf-8",
        )


if __name__ == "__main__":
    main()
