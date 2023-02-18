import React, {useState, useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import AddForm from "./pages/AddForm";
import Favorites from "./pages/Favorites";
import Basket from "./pages/Basket";
import Datafake from "./assets/data.json"

import {Api} from "./Api";
import Ctx from "./Ctx";

const PATH = "/";
//const PATH = "/dog-food/";

const smiles = [<span>^_^</span>, "=)", "O_o", ";(", "^_0", "@_@", "–_–"];
const App = () => {
    let usr = localStorage.getItem("user8");
    if (usr) {
        usr = JSON.parse(usr);
    }
    const [user, setUser] = useState(usr);
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    const [visibleGoods, setVisibleGoods] = useState(goods);
    const [favorites, setFavorites] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [basket, setBasket] = useState(localStorage.getItem("basket8") ? JSON.parse(localStorage.getItem("basket8")) : []);

    const dataShow = [];
        for (let i=0; i < 8;) {
            let j = Math.floor(Math.random() * 16);
            if(!dataShow.includes(Datafake[j])) {
                dataShow.push(Datafake[j]);
                i++;
            }
        }

    useEffect(() => {
        if (token) {
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    setGoods(data.products);
                })
            api.getUsers()
                .then(res => res.json())
                .then(data => {
                    setAuthors(data);
                })
        }
    }, []) 
    useEffect(() => {
        setApi(new Api(token));
        let usr = localStorage.getItem("user8");
        if (usr) {
            usr = JSON.parse(usr);
        }
        setUser(usr);
    }, [token])
    useEffect(() => {
        if (!user) {
            localStorage.removeItem("token8");
            setToken(null);
        }
    }, [user])
    useEffect(() => {
        if (token) {
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    setVisibleGoods(data.products);
                    setGoods(data.products);
                })
        }
    }, [api])
    useEffect(() => {
        setVisibleGoods(goods);
        setFavorites(goods.filter(el => {
            return el.likes && el.likes.includes(user._id);
        }))
    }, [goods])

    useEffect(() => {
        localStorage.setItem("basket8", JSON.stringify(basket));
    }, [basket]);

    return (
        <Ctx.Provider value={{
            user: user,
            token: token,
            api: api,
            modalActive: modalActive,
            goods: goods,
            visibleGoods: visibleGoods,
            favorites: favorites,
            setUser: setUser,
            setToken: setToken,
            setApi: setApi,
            setModalActive: setModalActive,
            setGoods: setGoods,
            setVisibleGoods: setVisibleGoods,
            setFavorites: setFavorites,
            PATH: PATH,
            basket,
            setBasket,
            authors
        }}>
            <div className="wrapper">
                <Header/>
                <main className="py-4">
                    <Routes>
                        <Route path={PATH} element={<Home data={dataShow}/>}/>
                        <Route path={PATH + "catalog"} element={<Catalog data={smiles}/>}/>
                        <Route path={PATH + "profile"} element={<Profile/>}/>
                        <Route path={PATH + "catalog/:id"} element={<Product/>}/>
                        <Route path={PATH + "add"} element={<AddForm/>}/>
                        <Route path={PATH + "favorites"} element={<Favorites/>}/>
                        <Route path={PATH + "basket"} element={<Basket/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
            <Modal/>
        </Ctx.Provider>
    )
}
export default App;