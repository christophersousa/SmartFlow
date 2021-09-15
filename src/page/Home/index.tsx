import { useEffect} from 'react';
import {Link} from 'react-router-dom'
import {partners} from '../../services/partners';
import headImg from '../../img/ifpb-Recuperado.jpg';
import loadImg from '../../img/loading.gif';


import Styles from './style.module.scss'
import { Menu } from '../../Components/Menu';
import { Footer } from '../../Components/Footer';
import { useSmart } from '../../context/SmartContext';

export function Home(){
    const{navBackground, setColorSolid, setTransparent, newNews, addNews, setReadNews} = useSmart()
    
    useEffect(() => {
        addNews()
        const handleScroll = () => {
            
            const show = window.scrollY >50
            if(window.scrollY <= 0){
                setTransparent()
            }
            if(show) {
                setColorSolid()
            }else{
                setTransparent()
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    return (
        <div>
            <Menu
                backgroundColor = { navBackground}
            />
            <header className={Styles.containerHeader}>
                <img src={headImg} alt="IFPB" />
                <div className={Styles.viewHeader}>
                    <h1>Intelligent Systems and Industry 4.0 Laboratory</h1>
                    <h3>Research and development</h3>
                    <div className={Styles.buttonHeader}>
                        <button type="submit"><a href="**" >Products</a></button>
                        <Link to="/About">
                            <button>About Us</button>
                        </Link>
                    </div>
                </div>
            </header>
            <main className={Styles.containerBody}>
                <div className={Styles.about}>
                    <h2>About SmartFlow</h2>
                    <div className={Styles.layoutAbout}>
                        <img src={loadImg} alt="SmartFlow" />
                        <div>
                            <h3>SmartFlow</h3>
                            <p className= "fade">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Link to="/About">
                                <button>Read more <i className="fas fa-angle-double-right"></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
               
                <div className={Styles.news}>
                    <h2>New news</h2>
                    <div className={Styles.newsContainer}>

                        {newNews.map((response) => {
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
                    <Link to='./News'>
                        <span>More news <i className="fas fa-arrow-circle-right"></i></span>
                    </Link>
                </div>      

                <div className={Styles.contributors}>
                    <h2>Partners</h2>
                    <div className={Styles.boxContribution}>
                        {partners.map((response) => {
                            return (
                                <section>
                                    <a href={response.url}>
                                        <img src={response.image} alt={response.name} />
                                        <h4>{response.name}</h4>
                                    </a>
                                </section>
                            )
                        })}
                    </div>                
                </div>

                <div className={Styles.contact}>
                    <h2>Location</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9221283226943!2d-34.8737235!3d-7.1350036999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace810852ae4f1%3A0xaf5445223401f2bb!2sIFPB%20-%20Campus%20Jo%C3%A3o%20Pessoa!5e0!3m2!1spt-BR!2sbr!4v1631196080191!5m2!1spt-BR!2sbr"  loading="lazy"></iframe>
                </div>
           </main>
              <Footer/>          
        </div>
    )
}