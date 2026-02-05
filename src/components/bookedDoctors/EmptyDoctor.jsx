import React from 'react';
import { useNavigate } from 'react-router';

const EmptyDoctor = () => {
    const navigate = useNavigate();
    return (
          <div className='mt-7'>
            <h1 className='text-2xl md:text-3xl font-bold text-center'>No Appointment Yet.</h1>
            <button className='btn block mx-auto px-6 rounded-3xl mt-6 bg-blue-500 text-white font-semibold' onClick={()=> navigate("/")}>Back to Home</button>
          </div>
    );
};

export default EmptyDoctor