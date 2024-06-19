import React, { useEffect } from 'react';
import './app.scss'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import Layout from './Layout/Layout';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import axios from 'axios';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import OneItem from './pages/OneItem/OneItem';
import CheckOut from './pages/CheckOut/CheckOut';
import {useDispatch} from "react-redux";
import {getAllClothes} from "./store/clothesSlice";

const App = () => {
const dispatch = useDispatch()
    useEffect(()=>{
        axios('http://localhost:8080/clothes')
        .then(({data})=>dispatch(getAllClothes(data)))
    },[])


    return (
        <>
        <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home />}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='oneitem' element={<OneItem/>}/>
            <Route path='checkout' element={<CheckOut/>}/>
        </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
        

        
        </Routes>
     
     

            
        </>
    );
};

export default App;