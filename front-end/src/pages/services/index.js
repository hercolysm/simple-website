import styles from './index.module.css'
import PageHeader from "../../components/PageHeader"
import Card from "./card"
import imgWebDevelop from './../../assets/images/service-web-develop.png'
import imgDynamics from './../../assets/images/service-microsoft-dynamics-365.png'
import imgPowerBi from './../../assets/images/service-power-bi.jpg'
import imgDesktop from './../../assets/images/service-desktop-develop.jpg'

function Services() {
    return (
        <>
            <PageHeader title="Serviços" />
            <div className={styles.CardsContainer}>
                <Card 
                    title="Desenvolvimento de Sistemas Web" 
                    description="Desenvolvimento de aplicações completas, desde o back-end até o front-end, com o uso das principais tecnologias de mercado."
                    image={imgWebDevelop}
                />
                <Card 
                    title="Customização Microsoft Dynamics 365" 
                    description="Criação de soluções personalizadas, automações de processos e integrações entre sistemas com o uso das ferramentas do Microsoft Power Platform."
                    image={imgDynamics}
                />
                <Card 
                    title="Análise de dados com Power BI" 
                    description="Dê vida aos dados com relatórios exclusivos para sua empresa e KPIs. Criação visuais de dados interativos para compartilhar insights com sua equipe."
                    image={imgPowerBi}
                />
                <Card 
                    title="Desenvolvimento de Sistemas Desktop" 
                    description="Oferecemos serviços de desenvolvimento de aplicações desktop programado com .NET Framework e SQL Server, garantindo alta performance, estabilidade e segurança em todas as soluções desenvolvidas."
                    image={imgDesktop}
                />
            </div>
        </>
    )
}

export default Services