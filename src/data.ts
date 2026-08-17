import lessonsJson from '../data/lessons.json'
import textbookJson from '../data/textbook_chapters.json'
import type { Lesson, TextbookChapter } from './types'

export const lessons = lessonsJson as Lesson[]
export const textbookChapters = textbookJson.chapters as TextbookChapter[]

export function getLesson(id: string) {
  return lessons.find((lesson) => lesson.lesson_id === id)
}

const markdownModules = import.meta.glob('../lessons/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export function getLessonMarkdown(id: string) {
  const entry = Object.entries(markdownModules).find(([path]) => path.endsWith(`/${id}.md`))
  if (!entry) return ''
  return entry[1].replace(/^---[\s\S]*?---\s*/, '')
}
