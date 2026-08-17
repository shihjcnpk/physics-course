export interface Lesson {
  lesson_id: string
  title: string
  grade: string
  semester: string
  big_idea: string
  importance: string
  core_question: string
  core_concept: string
  math_prerequisite: string[]
  math_connection: string
  experiment_level: 'NONE' | 'MICRO' | 'CORE'
  estimated_teaching_minutes: number
  estimated_practice_minutes: number
}

export interface TextbookSection {
  section_number: number
  title: string
  lesson_ids: string[]
  mode: string
}

export interface TextbookChapter {
  chapter_number: number
  volume: string
  title: string
  official_heading: string
  sections: TextbookSection[]
}
