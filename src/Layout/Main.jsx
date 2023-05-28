import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Home from '../Pages/Home/Home/Home';

const Main = () => {

    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

    return (
        <div>
            {/* login/signUp a gele header footer dekabena */}
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;