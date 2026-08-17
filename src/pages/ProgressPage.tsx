import { Link } from 'react-router-dom'
import { lessons } from '../data'
import { getCompleted } from '../progress'

export default function ProgressPage() {
  const completed = new Set(getCompleted())
  const percent = Math.round(completed.size / lessons.length * 100)
  return (
    <div>
      <div className="page-heading"><span className="eyebrow">保存在当前浏览器</span><h1>学习进度</h1><p>已完成 {completed.size}/70 课，{percent}%</p></div>
      <div className="progress-track"><span style={{ width: `${percent}%` }} /></div>
      <div className="progress-grid">
        {lessons.map((lesson) => <Link className={completed.has(lesson.lesson_id) ? 'complete' : ''} key={lesson.lesson_id} to={`/lessons/${lesson.lesson_id}`}><span>{completed.has(lesson.lesson_id) ? '✓' : '○'}</span>{lesson.lesson_id} {lesson.title}</Link>)}
      </div>
    </div>
  )
}
