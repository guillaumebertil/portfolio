export default function Skillcard({icon, name, level}) {

    const levelStyle = {
        "Débutant": "badge-warning",
        "Intermédiaire": "badge-success",
        "Apprentissage": "badge-info",
    }

    return (
        <div className="card bg-base-300 w-32 shadow-sm hover:scale-105 hover:shadow-secondary hover:shadow-lg">
            <figure className="pt-4">
                <i className={`${icon} text-6xl`}></i>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <span className={`badge ${levelStyle[level]} badge-outline badge-md`}>{level}</span>
            </div>
        </div>
    )
}