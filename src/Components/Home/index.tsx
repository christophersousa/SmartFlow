import headImg from '../../img/ifpb-Recuperado.jpg';

import Styles from './style.module.scss'

export function Home(){
    return (
        <main>
            <header className={Styles.containerHeader}>
                <img src={headImg} alt="IFPB" />
                <div className={Styles.viewHeader}>
                    <h1>Smart</h1>
                    <h3>Industrias 4.0</h3>
                    <div className={Styles.buttonHeader}>
                        <button type="submit"><a href="**" >Products</a></button>
                        <button type="submit"><a href="**" >About Us</a></button>
                    </div>
                </div>
            </header>
            <div className={Styles.body}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Ita relinquet duas, de quibus etiam atque etiam consideret. <a href="http://loripsum.net/" target="_blank">Itaque fecimus.</a> Et certamen honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio. </p>

                <p>Duo Reges: constructio interrete. <i>Quamquam tu hanc copiosiorem etiam soles dicere.</i> Ut in geometria, prima si dederis, danda sunt omnia. <i>Zenonis est, inquam, hoc Stoici.</i> Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. </p>
                <p>Duarum enim vitarum nobis erunt instituta capienda. <a href="http://loripsum.net/" target="_blank">Videamus animi partes, quarum est conspectus illustrior;</a> Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. Aufert enim sensus actionemque tollit omnem. Non est enim vitium in oratione solum, sed etiam in moribus. Tibi hoc incredibile, quod beatissimum. Hunc vos beatum; </p>
            </div>
        </main>
    )
}