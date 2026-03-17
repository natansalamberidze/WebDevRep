import { Skill } from '@/types/skillstype'

interface SkillItemProps {
  skill: Skill
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <li className="flex items-center gap-1 rounded-xl bg-zinc-900 p-1 hover:shadow-xl">
      <span className="size-0.5 rounded-full bg-accent-pink"/>
      <p className="text-zinc-200">
        {skill.text}
      </p>
    </li>
  )
}