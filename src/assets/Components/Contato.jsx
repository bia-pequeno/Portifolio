import style from './contact.module.css';
import phone from './img/celular-2.png'
import girl from './img/girl.gif'
import room from './img/room.gif'

function Contato() {
    return (
        <section id="contact" className={style.box_}>
            <div className={style.conteiner_}>
                <div className={style.colA}>
                    <h2>Fale Comigo!</h2>
                    <a href="mailto:bia.2017pequeno@gmail.com">
                        <button>
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                            bia.2017pequeno@gmail.com
                        </button>
                    </a>
                </div>
                <div className={style.colB}>
                    <img src={girl} alt=""/>
                </div>
            </div>
            <div className={style.line}></div>
        </section>
    );
}

export default Contato;
