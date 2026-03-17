export interface Skill {
  id: string
  text: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
} 