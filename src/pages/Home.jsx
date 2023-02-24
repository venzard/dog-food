import React, {useContext} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import "./style.css"
import pic from "../components/Images/adv.png";
import Ctx from "../Ctx";




export default ({data})=>{
    const {PATH} = useContext(Ctx);
    

    return(
        <>
        <h2>Крафтовые лакомства для собак</h2>
            <p>Всегда свежие лакомства ручной работы с доставкой на дом по России и всему миру</p>
            <Link className="btn-link" to={PATH + "catalog"}> Перейти в каталог </Link>

        <div className="adv">
            <div>
                <h1>-30%</h1>
                <p>Сухой корм для собак Purina One Мини Активная с курицей и рисом</p>
            </div>
            <img src={pic} />
        </div>
        <br></br>
        <div className="cards">
            {data.map((el, i) => <Card {...el} key={"card_" + i} />)}
        </div>
        </>

    )
}