import logoImg from '../../img/Logo2.png'

import Styles from './style.module.scss'
export function Footer(){
    return (
        <>
            <footer className={Styles.footer}>
                <img src={logoImg} alt="SmartFlow" />
                <section>
                    <h4>SmartFlow</h4>
                    <span>Intelligent Systems and Industry 4.0 Laboratory</span>
                    <span>instituto federal de educação ciência e tecnologia da paraíba</span>
                </section>
            </footer>
        </>
    )
}