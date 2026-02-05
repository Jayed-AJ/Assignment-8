import React from 'react';
// import { RechartsDevtools } from '@recharts/devtools';
const BookedDoctors = ({bookedDoc,handleDelete}) => {
    // const [chack,setChack] = useState(null)
    const {consultationFee,name,education} = bookedDoc;
    // bookedDoc && setChack(bookedDoc);
    // chack? console.log("true") :console.log("false");
    return (
       <>
        <div>
            {/* Booked Apponitments */}
            <div className='bg-white p-6 rounded-2xl mt-5 w-11/12 md:w-10/12 mx-auto shadow'>
            <div className="flex justify-between">
                <div className=''>
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-md font-semibold text-gray-400 mt-2">{education}</p>
                </div>
                <div>
                    <p className="text-md font-semibold text-gray-400 mt-0.5">{`Appointment Fee: ${consultationFee} (Inc: Vat & Tax)`}</p>
                </div>
            </div>
            <button onClick={()=>{handleDelete(bookedDoc)}} className='btn btn-outline rounded-3xl w-full text-red-500 md:py-2 lg:py-3 mt-6 '>Cancel Appointment</button>
        </div>
        </div>
       </>
    );
};

export default BookedDoctors;