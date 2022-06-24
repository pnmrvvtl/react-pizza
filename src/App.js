import './App.css';
import './scss/app.scss'
import Header from "./components/header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/home";
import Cart from "./routes/cart";
import NotFound from "./routes/not-found";


//https://62b56ca842c6473c4b320ab2.mockapi.io/items
function App() {


    return (

        <Routes>
            <Route path='/' element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>

    );
}

export default App;
