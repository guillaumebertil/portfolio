import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { skillGroups } from '../data/skills'

export default function Skills() {
    return (
        <section id="competences" className="border-b border-base-300 bg-base-100">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
                <SectionTitle>Mes compétences</SectionTitle>

                <div className="flex flex-col gap-6">
                    {skillGroups.map((group) => (
                        <div key={group.name} className="flex flex-col gap-3 md:flex-row md:items-center">
                            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-muted md:w-44 md:shrink-0">
                                {group.name}
                            </h3>
                            <ul className="flex flex-wrap gap-2.5">
                                {group.skills.map((skill) => (
                                    <SkillCard
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                        icon={skill.icon}
                                        darkIcon={skill.darkIcon}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
