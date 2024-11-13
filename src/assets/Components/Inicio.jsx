import Styles from './inicio.module.css'
import './root.css'
import loading from './img/gif.gif'
import { Link as ScrollLink } from 'react-scroll'

function Inicio() {
    return (
        <>
        <section id='inicio' className={Styles.home}>
            <div className={Styles.apresentacao}>
                <div className={Styles.nome}>
                    <h4>Hello world 👋🏾</h4>
                    <h1>Eu sou Beatriz,</h1>
                </div>
                <div className={Styles.content}>
                    <p className={Styles.typing}>Desenvolvedora Web Front-End</p> 
                        <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
                            <a className={Styles.button}>Fale comigo</a>
                        </ScrollLink>
                </div>
            </div>
            <div className={Styles.draw}>
                <img src={loading} alt="loading animation" />
            </div>
        </section>
        </>
    )
}

export default Inicio;
