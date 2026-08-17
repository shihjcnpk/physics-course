import { Link } from 'react-router-dom'
import { lessons } from '../data'

export default function CoursesPage() {
  const groups = lessons.reduce((result, lesson) => {
    const current = result.get(lesson.big_idea) || []
    current.push(lesson)
    result.set(lesson.big_idea, current)
    return result
  }, new Map<string, typeof lessons>())
  return (
    <div>
      <div className="page-heading"><span className="eyebrow">默认学习路径</span><h1>70课知识主线</h1><p>每课20分钟正课＋10分钟练习，按前后依赖顺序排列。</p></div>
      {[...groups].map(([idea, items]) => (
        <section className="course-group" key={idea}>
          <h2>{idea}</h2>
          <div className="course-grid">
            {items.map((lesson) => (
              <Link className="course-card" to={`/lessons/${lesson.lesson_id}`} key={lesson.lesson_id}>
                <span>{lesson.lesson_id} · {lesson.importance}</span>
                <strong>{lesson.title}</strong>
                <small>{lesson.core_question}</small>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
