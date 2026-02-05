import React from 'react';
import Navbar from '../Nabbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
// import ScrollTop from '../ScrollTop/ScrollTop';

const Root = () => {
    return (
        <div className=''>
            {/* <ScrollTop></ScrollTop> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;