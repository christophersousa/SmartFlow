import {Link} from 'react-router-dom'

import logoImg from '../../img/Logo2.png';
import Styles from './style.module.scss';

interface MenuProps{
    backgroundColor: string;
}

export function Menu({backgroundColor}: MenuProps){
    
    return(
        <div className={Styles.container}>
            <div className={Styles[backgroundColor]} >
                <Link to="/">
                    <img src={logoImg} alt="SmartFlow" />
                </Link>
                <div className={Styles.navegation}>
                    <Link to="/About">
                        <strong><a href="**"> ABOUT US</a></strong>
                    </Link>
                    <strong><a href="**">PROJECTS</a></strong>
                    <Link to="./News">
                        <strong><a href="**">NEWS</a></strong>
                    </Link>
                    <Link to="./Team">
                        <strong><a href="**">TEAM</a></strong>
                    </Link>
                    <strong><a href="**">PRODUCTION</a></strong>
                    <strong><a href="**">CONTACT</a></strong>
                </div>
            </div>
        </div>
    )
}