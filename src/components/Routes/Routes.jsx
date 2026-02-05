import React, { createContext, Suspense} from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Home/Home';
import Bookings from '../Bookings/Bookings';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import DoctorDetails from '../Home/Doctors/DoctorDetails';

const doctorsPromise = fetch('/data.json').then(res => res.json());


const UniqContext = createContext(null)

export const router = createBrowserRouter([

    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/doctorDetails/:id",
                // loader: ()=>fetch('data.json'),
                // Component: DoctorDetails
                element: <Suspense fallback={<p className='text-center text-3xl font-bold'>Loading...</p>}>
                    <DoctorDetails doctorsPromise={doctorsPromise}></DoctorDetails>
                </Suspense>
            },
            {
                path: "/bookings",
                Component: Bookings
            },
            {
                path: "/blogs",
                Component: Blogs,
            },
            {
                path: "/contact",
                Component: Contact,
            }

        ]
    }
])