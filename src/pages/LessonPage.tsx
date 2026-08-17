import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getLesson, getLessonMarkdown, lessons } from '../data'
import { getCompleted, setLessonCompleted } from '../progress'

export default function LessonPage() {
  const { lessonId = '' } = useParams()
  const lesson = getLesson(lessonId)
  const [completed, setCompleted] = useState(() => getCompleted().includes(lessonId))
  useEffect(() => { setCompleted(getCompleted().includes(lessonId)); window.scrollTo(0, 0) }, [lessonId])
  if (!lesson) return <div className="empty">没有找到这节课。<Link to="/textbook">返回课本目录</Link></div>
  const index = lessons.findIndex((item) => item.lesson_id === lessonId)
  const previous = lessons[index - 1]
  const next = lessons[index + 1]
  const toggle = () => { const value = !completed; setCompleted(value); setLessonCompleted(lessonId, value) }

  return (
    <article className="lesson-page">
      <div className="lesson-topline"><Link to="/textbook">← 课本目录</Link><span>{lesson.grade}{lesson.semester} · {lesson.big_idea}</span></div>
      <div className="lesson-title">
        <div><span className="eyebrow">{lesson.lesson_id} · {lesson.importance}</span><h1>{lesson.title}</h1><p>{lesson.core_question}</p></div>
        <div className="time-card"><strong>20 + 10</strong><small>分钟</small></div>
      </div>
      <div className="lesson-focus"><span>今天的核心</span><strong>{lesson.core_concept}</strong></div>
      <div className="markdown"><ReactMarkdown remarkPlugins={[remarkGfm]}>{getLessonMarkdown(lessonId)}</ReactMarkdown></div>
      <button className={`complete-button ${completed ? 'done' : ''}`} onClick={toggle}>{completed ? '✓ 已完成本课' : '标记为已完成'}</button>
      <nav className="lesson-nav">
        {previous ? <Link to={`/lessons/${previous.lesson_id}`}>← {previous.title}</Link> : <span />}
        {next ? <Link to={`/lessons/${next.lesson_id}`}>{next.title} →</Link> : <span />}
      </nav>
    </article>
  )
}
