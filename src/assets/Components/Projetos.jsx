import Styles from './projetos.module.css'
import projeto1 from './img/projeto1.png'
import projeto2 from './img/password.gif'
import projeto3 from './img/youtube.png'
import projeto4 from './img/cafe.png'
import projeto5 from './img/cadastro.png'
import projeto6 from './img/email.gif'

function Projetos() {
    return (
        <>
        <section id='projetos' className={Styles.conteiner}>
            <h2>Projetos</h2>
            <div className={Styles.Cards}>
                <a href="https://front-end-xi-eosin.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className={Styles.Card}>
                        <h3>Intermentes</h3>
                        <img src={projeto1} alt='' />
                        <p>Plataforma de psicologia online desenvolvida no PROA
                            <br/><br/>
                            REACT - CSS - JS - NodeJS - JAVA - mySQL
                        </p>
                    </div>
                </a>
                <a href="https://github.com/bia-pequeno/managedr-password" target="_blank" rel="noopener noreferrer">
                    <div className={Styles.Card}>
                        <h3>managedr password</h3>
                        <img src={projeto2} alt='' />
                        <p>Aplicação de gerenciamento de senhas criptografadas
                            <br/><br/>
                            PYTHON
                        </p>
                    </div>
                </a>
                <a href="https://github.com/bia-pequeno/API-gestao" target="_blank" rel="noopener noreferrer">
                    <div className={Styles.Card}>
                        <h3>API de gestão</h3>
                        <img src={projeto5} alt='' />
                        <p>API de gestão de funcionários
                            <br/><br/>
                            PYTHON - FastAPI - HTML - CSS - JS
                        </p>
                    </div>
                </a>
                <a href="https://meu-youtube.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className={Styles.Card}>
                        <h3>Clone do YouTube</h3>
                        <img src={projeto3} alt='' />
                        <p>Clone do YouTube desenvolvido no PROA
                            <br/><br/>
                            HTML - CSS - JS
                        </p>
                    </div>
                </a>
                <a href="https://coffee-station-mauve.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className={Styles.Card}>
                        <h3>Estação Café</h3>
                        <img src={projeto4} alt='' />
                        <p>Plataforma de uma cafeteria desenvolvida no PROA
                            <br/><br/>
                            HTML - CSS - JS
                        </p>
                    </div>
                </a>
                <a href="https://github.com/bia-pequeno/automacao-de-email" target="_blank" rel="noopener noreferrer">
                    <div className={Styles.Card}>
                        <h3>Automação</h3>
                        <img src={projeto6} alt='' />
                        <p>Automatização de e-mail
                            <br/><br/>
                            PYTHON
                        </p>
                    </div>
                </a>
            </div>
        </section>

        </>
    )
}

export default Projetos;