// == Composant
export default function Character({image, name}) {
    return(
        <div className="character">
            <img className="image" src={image} alt={name}></img>
            <h2>{name}</h2>
        </div>
    )
} 