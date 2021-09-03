import {useState, useRef, useEffect} from "react"
import logoImg from '../../img/Logo.png';
import Styles from './style.module.scss';

export function Menu(){
    const [navBackground, setNavBackground] = useState('backgroundTransparent')

    const navRef = useRef(navBackground)
    navRef.current = navBackground

    useEffect(() => {
        
        const handleScroll = () => {
            const show = window.scrollY >50
            if(show) {
                setNavBackground('backgroundSolid')
            }else{
                setNavBackground('backgraoundTransparent')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return(
        <div className={Styles.container}>
            <div className={Styles[navRef.current]} >
                <img src={logoImg} alt="SmartFlow" />
                <div className={Styles.navegation}>
                    <strong><a href="**"> ABOUT US</a></strong>
                    <strong><a href="**">PROJECTS</a></strong>
                    <strong><a href="**">NEWS</a></strong>
                    <strong><a href="**">TEAM</a></strong>
                    <strong><a href="**">PRODUCTION</a></strong>
                    <strong><a href="**">CONTACT</a></strong>
                </div>
            </div>
        </div>
    )
}