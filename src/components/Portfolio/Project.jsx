import ProjectImg from './ProjectImg'

export default function Project({title, description, images, skills, link}) {
    return (
        <div className='my-8 border border-primary/20 rounded-2xl p-4'>
            {/* Title */}
            <h3 className="text-3xl font-semibold">{title}</h3>

            {/* Description */}
            <div className='my-4'>
                <p className='mb-2'>{description}</p>
                <p>
                    {skills.map((skill, index) => (
                        <span className='badge badge-primary badge-md mx-1'>
                            {skill}
                        </span>
                    ))}
                </p>
            </div>

            {/* Images */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-8'>
                {images.map((image, index) => (
                    <ProjectImg
                        key={index}
                        url={image.url}
                        alt={image.alt}
                    />
                ))}
            </div>

            {/* Link */}
            <div className='mt-4'>
                <i className="devicon-github-original text-xl mr-2"></i>
                <a href={link} target='_blank' className='hover:text-secondary'>Lien vers le dépôt GitHub</a>
            </div>
        </div>
    )
}