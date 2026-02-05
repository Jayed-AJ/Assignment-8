import React from 'react';
import banner1 from "../../assets/banner-img-1.png";
// import banner2 from "../../assets/doctor-sample.png";
const Banner = () => {
    return (
        <div className='mt-5 md:mt-7 w-11/12 mx-auto rounded-2xl p-5 md:p-10 text-center shadow-sm bg-linear-to-t from-white to-stone-100'>
            <h1 className='font-bold text-3xl md:text-5xl'>Dependable Care, Backed by Trusted Professionals.</h1>
            <p className='mt-5 text-md'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='flex justify-center mt-5 gap-5 md:gap-8'>
             <input className='px-6 py-2 border-none focus:outline-none bg-white shadow rounded-3xl' type="text" placeholder='Search Doctor/Specialist' />
             <button className='btn bg-blue-500 rounded-3xl font-semibold text-white'>Search</button>
            </div>
            <div className='mt-10 flex flex-col md:flex-row justify-between gap-5 md:gap-4 lg:gap-8'>
                <img className='w-full md:w-1/2 object-cover rounded-3xl' src={banner1} alt="img" />
                <img className='w-full md:w-1/2 object-cover rounded-3xl' src="https://media.istockphoto.com/id/2208221303/photo/cheerful-female-doctor-and-patient-talking-in-hospital-waiting-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=URC2eIBZHvW0pvjsrn9eNKeuvuvpG3JymSF7qNHq1DY=" alt="img" />
            </div>
        </div>
    );
};

export default Banner;