import React, {useContext} from "react";
import { Star, StarFill, Trash3} from "react-bootstrap-icons"
import Ctx from "../../Ctx";
import "./review.css";
import pic from "../Images/nophoto.jpeg";

export default ({author, rating, created_at, text, _id, productId, setProduct}) => {
    const {authors,api, user,} = useContext(Ctx);
    const person = authors.filter(a => a._id === author)[0];
    const setRating = (n) => {
        let stars = [];
        for (let i = 0; i < n; i++) {
            stars.push(<StarFill key={i}/>);
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<Star key={i}/>);
        }
        return stars;
    }

    const remove = () => {
        api.deleteReview(productId, _id)
        .then(res => res.json())
        .then(data => {
            if(!data.error) {
                setProduct(data);
            }
        })
    };
 
    return <>
        <div className="rev">      
            {person && person.name && person.name === user.name && <button 
                    onClick={remove} 
                    className="btn-rem">
                        <Trash3 />
                </button>
            }
            <div className="one-review">
                <h3>{person && person.name || ""} {<img src={person && person.avatar && person.avatar === "https://react-learning.ru/image-compressed/default-image.jpg" ? pic : person.avatar} alt="user avatar"/>}</h3>
                <div>{new Date(created_at).toLocaleString()}</div>
                <div>{setRating(rating)} </div>
                <div>{text}</div> 
            </div>
        </div>
        
        
    </>
}