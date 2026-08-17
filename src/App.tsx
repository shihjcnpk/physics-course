import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import TextbookPage from './pages/TextbookPage'
import CoursesPage from './pages/CoursesPage'
import LessonPage from './pages/LessonPage'
import ProgressPage from './pages/ProgressPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/textbook" element={<TextbookPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/lessons/:lessonId" element={<LessonPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
