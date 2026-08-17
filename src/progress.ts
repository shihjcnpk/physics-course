const KEY = 'physics-course-progress-v1'

export function getCompleted(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  } catch {
    return []
  }
}

export function setLessonCompleted(id: string, completed: boolean) {
  const ids = new Set(getCompleted())
  if (completed) ids.add(id)
  else ids.delete(id)
  localStorage.setItem(KEY, JSON.stringify([...ids]))
}
