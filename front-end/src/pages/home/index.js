import WelcomeHeader from "./WelcomeHeader"
import SectionAboutUs from "./SectionAboutUs"
import PageHeader from "./../../components/PageHeader"
import imgHomeOurHistory from "./../../assets/images/home-our-history-600x300.jpg"
import imgHomeOurTeam from "./../../assets/images/home-our-team-600x300.jpg"
import imgHomeOurSkills from "./../../assets/images/home-our-skills-600x300.jpg"

function Home({appName}) {
    return (
        <>
            <WelcomeHeader appName={appName} />
            <PageHeader title="Sobre nós" />
            <SectionAboutUs 
                title="Nossa história"
                text="Nossa empresa foi fundada em 2019 com o objetivo de oferecer soluções de TI para empresas de todos os portes."
                image={imgHomeOurHistory} 
            />
            <SectionAboutUs 
                title="Nossa equipe"
                text="Com mais de seis anos de experiência no mercado, nossa equipe é composta por profissionais qualificados e apaixonados por tecnologia."
                image={imgHomeOurTeam}
            />
            <SectionAboutUs 
                title="Nossas especialidades"
                text="Oferecemos serviços de análise e desenvolvimento de sistemas, implantação de soluções e suporte técnico. Estamos empenhados em fornecer soluções personalizadas para nossos clientes e em ajudá-los a alcançar seus objetivos de negócios por meio de tecnologia de ponta."
                image={imgHomeOurSkills} 
            />
        </>
    )
}

export default Home