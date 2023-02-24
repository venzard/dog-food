import React, {useContext, useState, useEffect} from "react";
import "./index.css";
import Ctx from "../../Ctx";

export default ({name, pictures, price, discount, likes, _id}) => {
    const {user, setFavorites, api, setGoods, setBasket, setVisibleGoods} = useContext(Ctx);
    const [like, setLike] = useState(likes && likes.includes(user._id));
    const [flag, setFlag] = useState(false);
    const update = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setFlag(true);
        setLike(!like); 
        api.setLike(_id, like) 
            .then(res => res.json())
            .then(data => {
                setFavorites(prev => {
                    let arr = prev.filter(el => el._id === _id);
                    return arr.length > 0 ? 
                        prev.filter(el => el._id !== _id) : 
                        [...prev, data]
                })
                setGoods(prev => prev.map(el => {
                    if (el._id === data._id) {
                        return data;
                    } else {
                        return el;
                    }
                }));
                setVisibleGoods(prev => prev.map(el => {
                    if (el._id === data._id) {
                        return data;
                    } else {
                        return el;
                    }
                }));
            })
    }

    const buy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setBasket(prev => {
            const test = prev.filter(el => el.id === _id)
            if (test.length) {
                return prev.map(el => {
                    if (el.id === _id) {
                        el.cnt++;
                    }
                    return el;
                })
            } else {
                return [...prev, {id: _id, cnt: 1}]
            }
        })
    }

    const discountPrice = Math.round(price - (price * discount) / 100);
    return <div className="card">
        

        {discount && discount !==0 
        ? <div className="disc-price">-{discount}%</div> 
        : null}


        <img src={pictures} alt={name} style={{height: "100px"}}/>
        {name}
        
        {discount && discount !==0 
        ? <>
            
            <h6> <s>{price}Руб.</s> {discountPrice} Руб.</h6> 
        </>
        : <h6>{price} Руб.</h6>}
        {user && <button className="btn" onClick={buy}>Купить</button>}
        {user && <span className="card__heart" onClick={update}>
            {
                like 
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span>}
    </div>
}