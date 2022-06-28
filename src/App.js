import './App.css';
import './scss/app.scss'
import Header from "./components/header";
import React, {useContext, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/home";
import Cart from "./routes/cart";
import NotFound from "./routes/not-found";
import { useSelector, useDispatch } from 'react-redux'

export const SearchContext = React.createContext('');


//https://62b56ca842c6473c4b320ab2.mockapi.io/items
function App() {
    const [searchStr, setSearchStr] = useState('');
    //const count = useSelector((state) => state.counter.value)
    //const dispatch = useDispatch();

    return (

        <SearchContext.Provider value={{searchStr, setSearchStr}}>
            <Routes>
                <Route path='/' element={<Header/>}>
                    <Route index element={<Home search={searchStr}/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
        </SearchContext.Provider>

    );
}

export default App;
