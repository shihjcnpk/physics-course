import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink to="/" className="brand">⚛ 初中物理核心课程</NavLink>
        <nav>
          <NavLink to="/textbook">按课本找课</NavLink>
          <NavLink to="/courses">知识主线</NavLink>
          <NavLink to="/progress">学习进度</NavLink>
        </nav>
      </header>
      <main className="page"><Outlet /></main>
      <footer>少而精 · 小步走 · 强逻辑 · 多图示 · 勤互动 · 重理解 · 会建模</footer>
    </div>
  )
}
