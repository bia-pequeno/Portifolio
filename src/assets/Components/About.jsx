import Styles from './about.module.css'
import './root.css'
import bea from './img/bea.jpeg'

function About() {
    return (
        <>
        <section id="sobre-mim" className={Styles.about}>
            <div className={Styles.photo}>
                <img src={bea} alt="" />
            </div>
            <div className={Styles.mebea}> 
                <h2>Sobre Mim</h2>
                <p>Me chamo Beatriz, graduando o curso de Analise e Desenvolvimento de Sistemas pela Impacta. Desenvolvo páginas e sistemas web responsívos e de layout atrativo. Tenho uma trajetória de cerca de 4 anos estudando programação com cursos técnicos. Hoje na área de desenvolvimento vivo o aprendizado continuo, focando em tecnologias JavaScript e Python. Busco oportunidades no mercado como dev e, em um futuro próximo, viso me tornar um desenvolvedor Full Stack. </p>
            </div>
        </section>
        </>
    )
}

export default About;
