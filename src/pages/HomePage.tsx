import { Link } from 'react-router-dom'
import { getCompleted } from '../progress'

export default function HomePage() {
  const completed = getCompleted().length
  return (
    <div>
      <section className="hero">
        <span className="eyebrow">新课标 · 人教版第十二套教材</span>
        <h1>每次只学一个清楚的物理问题</h1>
        <p>20分钟理解，10分钟练习。先猜、再观察、画图建模，最后才用正式物理语言。</p>
        <div className="hero-actions">
          <Link className="button primary" to="/lessons/L001">从开学第一课开始</Link>
          <Link className="button" to="/textbook">按学校课本进度找课</Link>
        </div>
        <p className="progress-note">本机已完成 {completed}/70 课</p>
      </section>

      <div className="choice-grid">
        <Link to="/textbook" className="choice-card featured">
          <span>📘</span><h2>按课本章节学习</h2>
          <p>八上、八下、九年级全一册。学校讲到哪一节，就点哪一节。</p>
        </Link>
        <Link to="/courses" className="choice-card">
          <span>🧭</span><h2>按知识逻辑学习</h2>
          <p>沿70节核心课程依次前进，建立完整的物理知识链。</p>
        </Link>
      </div>
    </div>
  )
}
