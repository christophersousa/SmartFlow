import {Link} from "react-router-dom"
import { Footer } from "../../Components/Footer";
import { Menu } from "../../Components/Menu";
import { useSmart } from "../../context/SmartContext";
import { news } from "../../services/news";

import Styles from './style.module.scss'

export function News(){
    
    const {navBackground, setColorSolid, readNews, setReadNews} = useSmart()

    setColorSolid()
    console.log(readNews)
    return(
        <div>
            <Menu 
            backgroundColor = { navBackground}
            />
            <main className={Styles.news}>
                    <h1>News</h1>
                    <div className={Styles.newsContainer}>
                        {news.map((response) => {
                            return (
                                <div className={Styles.cardNews} key={response.id}>
                                    <img src={response.images[0].image1} alt={response.title} />
                                    <h4>{response.title}</h4>
                                    <p className="fade">{response.descriptions[0].description1}</p>
                                    <div className={Styles.containerButton} onClick={() => setReadNews(response)}>
                                        <Link to="/ViewNews">
                                            <button >Read more <i className="fas fa-angle-double-right"></i></button>
                                        </Link>
                                    </div>
                                </div> )                      
                        })}
                    </div>
                </main>
            <Footer/>
        </div>
    )
}