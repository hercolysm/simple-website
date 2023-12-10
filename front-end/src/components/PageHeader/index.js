import styles from './index.module.css'

function PageHeader({title}) {
    return <h1 className={styles.PageHeader}>{title}</h1>
}

export default PageHeader