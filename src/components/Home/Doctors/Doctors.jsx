import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [veiw,setVeiw] = useState(false);
    const [doctors,setDoctors] = useState([]);
    useEffect(()=> {
        fetch('/data.json').
        then(res =>res.json()).
        then(data => setDoctors(data));
    },[])
    // console.log(doctors)
    return (
        <div className='mt-6 md:mt-8 p-5'>
            <h1 className='text-3xl md:text-4xl font-bold text-center'>Our best Doctors.</h1>
            <p className='text-center text-md mt-6'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='mt-5 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 '>
                {
                    doctors.map(doctor => veiw? <Doctor className="xl:col-span-2 xl:col-start-2" key={doctor.id} doctor={doctor}></Doctor> : doctor.id < 7 && <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
             <button onClick={()=>setVeiw(!veiw)} className='mt-6 btn block mx-auto bg-blue-500 rounded-3xl font-semibold text-white'>{veiw? "Return" : "Veiw all Doctors"}</button>            
            {/* <h1 className={`text-xl font-bold ${veiw? "block":"hidden"}`} >Jayed</h1> */}
        </div>
    );
};

export default Doctors;