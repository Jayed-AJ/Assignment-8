import React, { useEffect, useState } from 'react';
import { getDocFromLSt, removeDocToLSt } from '../Utility/utility';
import BookedDoctors from '../bookedDoctors/BookedDoctors';
import { toast, ToastContainer } from 'react-toastify';
import EmptyDoctor from '../bookedDoctors/EmptyDoctor';
import BookedChart from '../bookedDoctors/BookedChart';

const Bookings = () => {
    const [doctors,setdoctros]=useState([]);
    const [bookedDocs, setBookedDocs] = useState([]);
    useEffect(()=>{
        fetch('/data.json').
        then(res => res.json()).
        then(data => setdoctros(data));    
    },[])
    // console.log(doctors);
    const bookedDocId = getDocFromLSt();
    // console.log(bookedDocId);

   useEffect(() => {
    const bookedList =  doctors.filter(doc => bookedDocId.includes(doc.id));
    // setBookedDoc(bookedList);
    setBookedDocs(bookedList)
   },[doctors])

//    console.log(bookedDocs);
   
    const handeltoast = () => {
        // console.log("hellow")
        toast("Appointment Cencel!");
    }

    const handleDelete = (bookedDoc)=> {
        const remaingDoctors = bookedDocs.filter(bookedDoctor=> bookedDoctor.id !== bookedDoc.id);
        setBookedDocs(remaingDoctors);
        removeDocToLSt(bookedDoc.id);
        handeltoast();
    }
    // const handelTry = () => {
    //     // console.log("clicked")
    //     handeltoast()
    // function was made to send as prop in bookedDoctor so that it can trigger by any eventHandeler like onClick.
    // }
    console.log(bookedDocs);
    return (
        <div>
            <h1 className='text-center mt-5 text-3xl md:text-4xl font-bold'>My Today Appointments</h1>
            <p className='text-center mt-4 text-lg font-semibold text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <ToastContainer />
            {
                bookedDocs.length === 0 ? (
                    <EmptyDoctor />
                ) : 
                    <>
                    {
                        bookedDocs.map(bookedDoc => (
                        <BookedDoctors
                            key={bookedDoc.id}
                            bookedDoc={bookedDoc}
                            handleDelete={handleDelete}
                        />
                        ))
                    }
                    <BookedChart bookedDocs={bookedDocs} />
                    </>
            }
            {/* {
             bookedDocs.length === 0 ? <EmptyDoctor /> : 
                // <BookedChart bookedDocs={bookedDocs} ></BookedChart>
                bookedDocs.map(bookedDoc => <BookedDoctors key={bookedDoc.id}
                bookedDoc={bookedDoc}
                handleDelete={handleDelete}
                bookedDocs={bookedDocs} >
                </BookedDoctors>)   
            } */}
        </div>
    );
};
export default Bookings;


 // bookedDocs.length === 0 ? <EmptyDoctor /> : 
            //     // <BookedChart bookedDocs={bookedDocs} ></BookedChart>
            //     bookedDocs.map(bookedDoc => <BookedDoctors key={bookedDoc.id}
            //     bookedDoc={bookedDoc}
            //     handleDelete={handleDelete} >
            //     </BookedDoctors>)