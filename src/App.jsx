import React, {useState} from "react";
import "./style.css"
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"
import products from "./assets/data.json"
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";

const smiles =["^-^", "=)","0_o",":-)", "@_@", "^-0", "-_-"]
const App  =()=>{  
    const [user, setUser] = useState(localStorage.getItem("user8"));
    return (
        <div className="container">
            <Header user={user} setUser={setUser}/>
            <main>
                {user ? <Catalog data={products}/>:<Home data={smiles}/>}
            </main>
            <Footer/>
        </div> 
    )
}

export default App;