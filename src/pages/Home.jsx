import React, {useContext} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import "./style.css"
import pic from "../components/Images/adv-1.jpg";
import Ctx from "../Ctx";

export default ({data})=>{
    const {PATH} = useContext(Ctx);
    const dataShow = [];
        for (let i=0; i < 8;) {
            let j = Math.floor(Math.random() * 16);
            if(!dataShow.includes(data[j])) {
                dataShow.push(data[j]);
                i++;
            }
        }

    return(
        <>
        <h2>Крафтовые лакомства для собак</h2>
            <p>Всегда свежие лакомства ручной работы с доставкой на дом по России и всему миру</p>
            <Link className="btn-link" to={PATH + "catalog"}> Перейти в каталог </Link>

        <div className="adv">
            <div>
                <h2>Подарок за<br/>первый заказ!</h2>
                <p>Легкое говяжье - пластины</p>
            </div>
            <img src={pic} />
        </div>
        <br></br>
        <div className="cards">
            {dataShow.map((el, i) => <Card {...el} key={"card_" + i} />)}
        </div>
        </>

    )
}