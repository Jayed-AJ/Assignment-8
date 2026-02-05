import React  from 'react';
import DoctorDetails from './DoctorDetails';
import { NavLink } from 'react-router';
// ,speciality
const Doctor = ({doctor}) => {
    const {id,name,doctorImage,education,registrationNumber,experience} = doctor;
    // const handelDetails = () => {
        
    // }    
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                    src={doctorImage}
                    alt="doctor Image"
                    className="rounded-md object-cover h-72 min-w-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className='space-x-5'>
                        <button className="btn btn-outline btn-info  btn-sm rounded-2xl">Available</button>
                        <button className="btn btn-outline btn-success btn-sm rounded-2xl">{experience}</button>
                    </div>
                    <h2 className="card-title text-xl">{name}</h2>
                    <p className='text-lg font-semibold text-gray-500'>{education}</p>
                    <p className='border-t border-dashed border-gray-300 pt-2 text-lg font-semibold text-gray-400 '>{registrationNumber}</p>
                    <div onClick={() => window.scrollTo(0, 0, "smoth")} className="card-actions w-full">
                    <NavLink  className="w-full" to={`/doctorDetails/${id}`}>
                       <button className="btn btn-outline text-blue-600 rounded-3xl w-full text-lg font-semibold">Veiw Details</button>
                    </NavLink>
                    </div>
                </div>
                </div>
        </div>
    );
};
 
export default Doctor;