import { useState } from "react";
import Popup from '../../popup/Popup'

export default function PortfolioItem({ d, index }) {

    const [activited, setActivited] = useState(false)
    return (
     
            <div key={d.title + index} className={"item "/*+(activited && "active")}  onClick={() =>activited ? setActivited(false) : setActivited(true)*/}>
                <img src={d.img} alt=""/>
                <h3>{d.title}</h3>
            </div> 
    )
}