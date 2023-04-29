import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from './components/pages/login';
import ShowFilter from './components/pages/show_filter';
import './App.css'

export default function Main(){
    const Main = () => {
        return (
            <Routes>
                <Route exact path='/login' Component={Login} ></Route>
                <Route exact path='/show_filter' Component={ShowFilter}></Route>
            </Routes>
        )
    }
}