import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getLesson, textbookChapters } from '../data'

const volumes = ['八年级上册', '八年级下册', '九年级全一册']

export default function TextbookPage() {
  const [volume, setVolume] = useState(volumes[0])
  const chapters = useMemo(() => textbookChapters.filter((chapter) => chapter.volume === volume), [volume])

  return (
    <div>
      <div className="page-heading">
        <span className="eyebrow">第二套导航 · 不改变70课知识主线</span>
        <h1>按人教版课本章节找课</h1>
        <p>刚开学建议选择“八年级上册”，从第一章第一节开始。</p>
      </div>
      <div className="tabs" role="tablist">
        {volumes.map((item) => (
          <button key={item} className={item === volume ? 'active' : ''} onClick={() => setVolume(item)}>{item}</button>
        ))}
      </div>
      <div className="chapter-list">
        {chapters.map((chapter, index) => (
          <details className="chapter" key={chapter.chapter_number} open={volume === volumes[0] && index === 0}>
            <summary><span>第{chapter.chapter_number}章</span><strong>{chapter.title}</strong><small>{chapter.sections.length}节</small></summary>
            <div className="section-list">
              {chapter.sections.map((section) => (
                <div className="section-row" key={section.section_number}>
                  <div>
                    <span className="section-number">第{section.section_number}节</span>
                    <strong>{section.title}</strong>
                    <small>{section.mode}</small>
                  </div>
                  <div className="lesson-links">
                    {section.lesson_ids.map((id) => {
                      const lesson = getLesson(id)
                      return <Link key={id} to={`/lessons/${id}`}>{id} {lesson?.title}</Link>
                    })}
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
