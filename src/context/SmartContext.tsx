import { createContext, useContext, useState , ReactNode} from "react";
import {news} from '../services/news';

interface IRouterContextProps{
    children: ReactNode,
}

interface INewType{
    id: number, 
    title: string, 
    descriptions: {description1: string, description2: string, description3: string}[], 
    images:{image1: string, image2: string, image3: string}[]
}

interface SmartContextProps{
    navBackground: string,
    newNews: INewType[],
    readNews: INewType,
    setReadNews(d: INewType): void,
    addNews(): void,
    setTransparent():  void;
    setColorSolid(): void;

}
export const SmartContext = createContext({}as SmartContextProps);

export function SmartContextProvider({children}: IRouterContextProps){

    const [navBackground, setNavBackground] = useState('backgroundTransparent')
    const setTransparent = () => setNavBackground('backgroundTransparent')
    const setColorSolid = () => setNavBackground('backgroundSolid')

    const [newNews, setNewNews] = useState([news[0]])
    const addNews = () =>{
        const arrayNewNews = news.reverse().slice(0,3)
        setNewNews(arrayNewNews)
     }

     const [readNews, setReadNews] = useState(news[0])

    return(
        <SmartContext.Provider value={{
            navBackground, 
            newNews, 
            setTransparent,
            setColorSolid,
            addNews,
            readNews, 
            setReadNews
            }}>
            {children}
        </SmartContext.Provider>
    )
  }
  
  export function useSmart(){
    return useContext(SmartContext )
  }