import styles from './index.module.css'
import PageHeader from "../../components/PageHeader"
import { SiWhatsapp } from "react-icons/si";

function Contact() {
    return (
        <div className={styles.Contact}>
            <PageHeader title="Contato" />
            <h2>Entre em contato conosco para solicitar nossos serviços</h2>
            <p>Se você está procurando soluções de TI personalizadas para a sua empresa, entre em contato conosco. Não hesite em nos contatar para discutir como podemos ajudá-lo a transformar sua empresa por meio da tecnologia. Estamos ansiosos para ouvir de você!</p>
            <button>
                <SiWhatsapp />
                Envie uma mensagem
            </button>
            <h3>HMA SOFTWARES</h3>
            <ul>
                <li>
                    E-mail: <a href="mailto:hercolysmoraes@live.com">hercolysmoraes@live.com</a>
                </li>
                <li>
                    Celular: <a href="tel:+5585988696392">+55 (85) 98869-6392</a>
                </li>
            </ul>
        </div>
    )
}

export default Contact