import React, {useState} from "react";
import "./style.css"
import products from "./assets/data.json"

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"

import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
//import Search from "./components/Search/search";

const smiles =["^-^", "=)","0_o",":-)", "@_@", "^-0", "-_-"]
const App  =()=>{  
    const [user, setUser] = useState(localStorage.getItem("user8"));
    return (
        <div className="container">
            <Header user={user} setUser={setUser} products={products}/>
            <main>
                {user ? <Catalog data={products}/>:<Home data={smiles}/>}
            </main>
            <Footer/>
        </div> 
    )
}

export default App;