import React, {useState} from "react";
import Search from "../Search/search";
import "./header.css";

export default ({user,setUser, products}) => {
     

    //let user = localStorage.getItem("user8");
    const logIn = (e)=>{
        e.preventDefault();
        let name = prompt("Как вас зовут?");
        if(name){
            localStorage.setItem("user8", name);
            setUser(name);
        }
    }
    const logOut = (e)=>{
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return (
        <header>
            <a className="logo" href="">DogFood</a>
            <Search data={products}/>
            {/* <input type="search" placeholder="Поиск..." className="search"/> */}
            <nav className="menu">
                {user && <a href="">{user}</a>}
                {!user && <a href="" onClick={logIn}>Войти</a>}
                {user && <a href="" onClick={logOut}>Выйти</a>}
            </nav>
        </header>
    )
}