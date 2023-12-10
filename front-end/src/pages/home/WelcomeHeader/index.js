import styles from './index.module.css'
import imgWelcomeHeader from './../../../assets/images/home-welcome-header.jpg'

function WelcomeHeader({appName}) {
    return (
        <header className={styles.WelcomeHeader} style={{ backgroundImage: `url(${imgWelcomeHeader})` }}>
            <h1>Bem vindo(a) a {appName}</h1>
        </header>
    )
}

export default WelcomeHeader