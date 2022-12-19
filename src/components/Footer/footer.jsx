import React from "react";
import "./footer.css";

export default () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <a href="#" className="footer__logo-link">DoGFooD</a>
                </div>

                <div className="footer__nav nav1">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">Каталог</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Акции</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Новости</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Отзывы</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__nav nav2">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">Оплата и доставка</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Часто спрашивают</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Обратная связь</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Контакты</a>
                        </li>
                    </ul>
                </div>

                <div className="social">
                    <ul className="soc__list">
                        <li className="soc__item" >
                            <h2>Мы на связи</h2>
                        </li>
                        <li className="soc__item">
                            <h3>8 (999) 00-00-00</h3>
                        </li>
                        <li className="soc__item">
                            <h3>dogfood@gmail.com</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}