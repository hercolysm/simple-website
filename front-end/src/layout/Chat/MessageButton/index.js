import styles from './index.module.css'
import { SiLivechat } from 'react-icons/si'

function MessageButton() {
    return (
        <div className={styles.MessageButton}>
            <SiLivechat />
        </div>
    )
}

export default MessageButton