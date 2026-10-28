import ProjectGallery from './ProjectGallery'

export default function Project({ title, description, stack, images, repo, demo }) {
    const cover = images[0]

    return (
        <article className="group flex flex-col gap-6 rounded-box border border-base-300 bg-base-100 p-4 transition-colors duration-200 hover:border-secondary sm:p-5 md:flex-row">
            <div className="overflow-hidden rounded border border-base-300 md:w-2/5 md:shrink-0">
                <img
                    src={cover.url}
                    alt={cover.alt}
                    width="1920"
                    height="1080"
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
            </div>

            <div className="flex min-w-0 flex-col gap-3">
                <h3 className="text-2xl font-bold text-heading">{title}</h3>
                <p className="leading-relaxed">{description}</p>

                <ul className="flex flex-wrap gap-1.5" aria-label="Technologies utilisées">
                    {stack.map((tech) => (
                        <li key={tech} className="rounded-sm bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-2 font-mono text-sm">
                    <a href={repo} target="_blank" rel="noopener noreferrer" className="link-draw text-primary">
                        &gt; dépôt GitHub
                    </a>
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="link-draw text-primary">
                            &gt; démo
                        </a>
                    )}
                    <ProjectGallery title={title} images={images} />
                </div>
            </div>
        </article>
    )
}
