import React, {useState, useEffect, useContext} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import Review from "../components/Review/review";
import Ctx from "../Ctx";
import { Trash3, Truck, PatchCheck} from "react-bootstrap-icons";
import "../pages/style.css";

export default () => {
    const {api, PATH, user, setGoods} = useContext(Ctx);
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        api.getProduct(id)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);

    const discountPrice = Math.round(product.price - (product.price * product.discount) / 100);
    const remove = () => {
        api.delProduct(id)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(!data.error) {
                setGoods(prev => prev.filter(g => g._id !== data._id));
                navigate(`${PATH}catalog`);
            }
        })
    };

    return (
        <>
            <Link className="link-back" to={PATH + "catalog"}>
                <i className="fa-solid fa-angle-left"></i>  Назад
            </Link>

            {product && product.author && product.author._id === user._id && <button 
                    onClick={remove} 
                    className="btn-remove">
                        <Trash3 />
                </button>
            }

            <h2 className="product-header">{product.name || "Страница товара"}</h2>
            
            <div className="product-container">

                <div className="product-hero">

                    <div className="product-label">
                        {product.discount > 0 && <span className="product-discount">-{product.discount}%</span>}
                    </div>

                    <div className="hero">
                        <img src={product.pictures} alt="Здесь будет фотография товара" />
                    </div>

                    <div className="product-info">
                        <div className="product-prices">
                            {product.discount > 0 && <span className="product-old-price">{product.price} руб</span>}            
                            <span 
                                className={product.discount > 0 
                                    ? 
                                    "product-price product-disc" 
                                    : 
                                    "product-price"}>{discountPrice} руб</span>
                        </div>


                        <div className="product-cart">
                            <div className="product-number"></div>
                            <button className="product-btn-card">В корзину</button>

                        </div>

                        <div className="product-about">
                            <Truck className="about-icon"/>
                            <div className="about-info">
                                <p>Доставка по всему миру!</p>
                                <p>Доставка курьером - <span className="bold">от 399 руб</span></p>
                                <p>Доставка в пункт выдачи - <span className="bold">от 199 руб</span></p>
                            </div>
                        </div>
                        <div className="product-about">
                            <PatchCheck className="about-icon check" />
                            <div className="about-info">
                                <p>Гарантия качества</p>
                                <p>Если вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем всё возможное, чтобы удовлетворить ваши нужды</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="product-description">
                    <span>Описание</span>
                    <p>{product.description}</p>

                    <span>Характеристики</span>
                    <div className="product-desc">
                        <div>Вес</div>
                        <div>{product.wight}</div>

                        <div>Количество</div>
                        <div>{product.stock} шт</div>
                        
                    </div>
            
                    <span>Отзывы</span>
                    <button className="btn-review">Написать отзыв</button>
                    <div className="reviews">
                        {product.reviews && product.reviews.length > 0 &&
                        product.reviews.map((el, i) =>
                            <Review {...el} key={i} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}