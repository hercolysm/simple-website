import styles from './index.module.css'

function Footer({appName}) {

    let currentYear = "2023";

    return (
        <footer className={styles.Footer}>
            <div>
                <p>Copyright © {currentYear} {appName} – Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer