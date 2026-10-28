import Project from '../components/Portfolio/Project'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'

export default function Portfolio() {
    return (
        <section id="portfolio" className="border-b border-base-300 bg-base-200">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
                <SectionTitle>Mon portfolio</SectionTitle>

                <div className="flex flex-col gap-6">
                    {projects.map((project) => (
                        <Project
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                            images={project.images}
                            repo={project.repo}
                            demo={project.demo}
                        />
                    ))}
                </div>

                <p className="mt-8 text-muted">
                    Le code source de mes autres projets sont disponibles sur mon{' '}
                    <a href="https://github.com/guillaumebertil" target="_blank" rel="noopener noreferrer" className="link-draw text-primary">
                        GitHub
                    </a>
                </p>
            </div>
        </section>
    )
}
