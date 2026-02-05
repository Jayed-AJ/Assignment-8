import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollTop = () => {

   const {pathName} = useLocation();

   useEffect(()=>{
    window.scrollTo({
        top: 0,
        left: 0,
    })
   },[pathName])

    return null
};

export default ScrollTop;