import styles from './index.module.css'

function Card({title, description, image}) {
    return (
        <div className={styles.Card} style={{ backgroundImage: `url(${image})` }}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card 