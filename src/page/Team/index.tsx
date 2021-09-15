import { Footer } from "../../Components/Footer"
import { Menu } from "../../Components/Menu"
import { useSmart } from "../../context/SmartContext"
import {team} from "../../services/team"

import Styles from './style.module.scss'
export function Team(){

    const{navBackground, setColorSolid} = useSmart()
    setColorSolid()
    return(
        <>
            <Menu
                backgroundColor = { navBackground}
            />
            <main className={Styles.container}>
                <h1>Team SmartFlow</h1>
                {team.map((response)=>{
                    return(
                        <section>
                        <img src={response.img} alt={response.name} />
                        <ul>
                            <li><a href={response.social?.twitter}><i className="fab fa-twitter"></i></a></li>
                            <li><a href={response.social?.facebook}><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href={response.social?.instagram}><i className="fab fa-instagram"></i></a></li>
                            <li><a href={response.social?.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                        <div>
                            <h4>{response.name}</h4>
                            <span>{response.prof}</span>
                        </div>
                    </section>
                    )
                })}
            </main>

            <Footer/>
        </>
    )
}