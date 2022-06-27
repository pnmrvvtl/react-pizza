import './App.css';
import './scss/app.scss'
import Header from "./components/header";
import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/home";
import Cart from "./routes/cart";
import NotFound from "./routes/not-found";


//https://62b56ca842c6473c4b320ab2.mockapi.io/items
function App() {
    const [searchStr, setSearchStr] = useState('');

    return (

        <Routes>
            <Route path='/' element={<Header search={searchStr} setSearch={setSearchStr}/>}>
                <Route index element={<Home search={searchStr}/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>

    );
}

export default App;
