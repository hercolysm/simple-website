import styles from './index.module.css'

function Content(props) {
    return <section className={styles.Content}>{props.children}</section>
}

export default Content