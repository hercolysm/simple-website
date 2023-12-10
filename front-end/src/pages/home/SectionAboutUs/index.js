import styles from './index.module.css'

function SectionAboutUs({title, text, image}) {
    return (
        <div className={styles.SectionAboutUs}>
            <div className={styles.SectionAboutUsText}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className={styles.SectionAboutUsImg}>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default SectionAboutUs