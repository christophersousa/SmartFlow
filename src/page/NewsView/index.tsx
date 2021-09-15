import { Footer } from "../../Components/Footer"
import { Menu } from "../../Components/Menu"
import { useSmart } from "../../context/SmartContext"


import Styles from './style.module.scss'
export function NewsView(){
    const{readNews, navBackground,setColorSolid} = useSmart()
    setColorSolid()
    return (
        <>
            <Menu
                backgroundColor = { navBackground}
            />
            <main className={Styles.container}>
                <h1>{readNews.title}</h1>

                <img src={readNews.images[0].image1} alt={readNews.title} />
                <p>{readNews.descriptions[0].description1}</p>

                <img src={readNews.images[0].image2} alt={readNews.title} />
                <p>{readNews.descriptions[0].description2}</p>

                <img src={readNews.images[0].image3} alt={readNews.title} />
                <p>{readNews.descriptions[0].description3}</p>
                
            </main>

            <Footer/>
        </>
    )
}