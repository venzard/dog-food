import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Ctx from "../../Ctx";
import "./footer.css";
import Weather from "../Weather/weather";

export default () => {
    const {PATH} = useContext(Ctx);
    
    return (
        <footer>
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <Link className="logo" to={PATH}><img src="/img/doc-icon.svg"/>DogFood</Link>
                </div>

                <div className="footer__nav nav1">
                    <ul className="footer__list">
                        <Link to="/catalog">Каталог</Link>
                        <Link to="#">Акции</Link>
                        <Link to="#">Новости</Link>
                        <Link to="#">Отзывы</Link>
                    </ul>
                </div>

                <div className="footer__nav nav2">
                    <ul className="footer__list">
                        <Link to="#">Оплата и доставка</Link>
                        <Link to="#">Часто спрашивают</Link>
                        <Link to="#">Обратная связь</Link>
                        <Link to="#">Контакты</Link>
                    </ul>
                </div>

                <div className="social">
                    <ul className="soc__list">
                        <li className="soc__item">
                            <h6>8 (999) 00-00-00</h6>
                        </li>
                        <li className="soc__item">
                            <h6>dogfood@gmail.com</h6>
                        </li>
                        <div className="social-media">
                            <Link><i className="fa-brands fa-telegram" /></Link>
                            <Link><i className="fa-brands fa-vk" /></Link>
                            <Link><i className="fa-brands fa-skype" /></Link>
                            <Link><i className="fa-brands fa-instagram" /></Link>
                            <Link><i className="fa-brands fa-facebook" /></Link>
                            <Link><i className="fa-brands fa-twitter" /></Link>
                        </div>
                    </ul>
                </div>
                
                <div>
                    <ul>
                        <Weather></Weather>
                    </ul>
                </div>
            </div>
        </footer>
    )
}