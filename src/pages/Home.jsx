import React from "react";
import Card from "../components/Card";
import Ads from "../components/Ads/ads";
import {Link} from "react-router-dom";
/*import "./style.css"*/


export default ({data})=>{
    return(
        <>
        <h1>Главная страница</h1>
        <Link to="/catalog">Перейти в каталог</Link>
        <Ads/>
        {/*<div className="hero">
            <div className="hero-title">
                <h1>Крафтовые<br/>лакомства для<br/>собак</h1>
                <p>Всегда свежие лакомства ручной<br/>работы с доставкой по России и миру</p>
                <button className="toCatalog">Каталог > </button> 
            </div>
        </div>
        <div className="cards wrapper">
                <img  className="ad ad1" src="/img/adv-1.jpg" alt="ad block 1"/>
                {data.map((el,i) => <Card key={"card_" + i} text={el} like={(i+1) % 2 === 0}/>)}
                <div className="ad-double">
                    <img  className="ad ad2" src="/img/adv-2.jpg" alt="ad block 2"/>
                    <img  className="ad ad2a" src="/img/adv-2a.jpg" alt="ad block 2a"/>
                </div> 
                {data.map((el,i) => <Card key={"card_" + i} text={el} like={(i+1) % 2 === 0}/>)}
                <div className="ad-double">
                    <img  className="ad ad3" src="/img/adv-3.jpg" alt="ad block 3"/>
                    <img  className="ad ad3a" src="/img/adv-3a.jpg" alt="ad block 3a"/>
                </div> 
    </div>*/}
        </>
    )
}