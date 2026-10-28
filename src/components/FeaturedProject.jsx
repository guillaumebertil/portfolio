import { featuredProject } from '../data/projects'

// Encart « projet phare » affiché dans la section À propos
export default function FeaturedProject() {
    const { title, description, images, repo, demo } = featuredProject

    return (
        <aside
            aria-labelledby="featured-project-title"
            className="group flex flex-col gap-6 rounded-box border border-secondary bg-base-100 p-5 sm:p-6 md:flex-row md:items-center"
        >
            <div className="overflow-hidden rounded border border-base-300 md:w-2/5 md:shrink-0">
                <img
                    src={images[0].url}
                    alt={images[0].alt}
                    width="1920"
                    height="1080"
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
            </div>
            <div className="min-w-0">
                <p className="mb-1.5 font-mono text-sm text-secondary">
                    <span aria-hidden="true">★ </span>projet phare
                </p>
                <h3 id="featured-project-title" className="mb-2.5 text-2xl font-bold text-heading">{title}</h3>
                <p className="mb-5 leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-3">
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm btn-lift">
                        Voir la démo
                    </a>
                    <a href={repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm btn-lift border-base-300 text-base-content hover:border-primary hover:bg-transparent hover:text-primary">
                        Code source
                    </a>
                </div>
            </div>
        </aside>
    )
}
