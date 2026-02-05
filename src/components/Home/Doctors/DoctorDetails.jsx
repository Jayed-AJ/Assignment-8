import React, { use} from 'react';
import { OctagonAlert } from 'lucide-react';
// , { useEffect, useState }
import { useParams } from 'react-router';
import { addDocToLSt } from '../../Utility/utility';
import { ToastContainer } from 'react-toastify';
// import withReactContent from 'sweetalert2-react-content'

// const MYSwal = withReactContent(Swal) ;



const DoctorDetails = ({doctorsPromise}) => {
    // const doctors = useLoaderData();
    const doctors = use(doctorsPromise);

    // const [uniq,setUniq] = useState([]);
    // const [appointments,setAppointments] = useState([]);

    // // I wiil use ContextAPI to get these states from Appontment Component.


    // const handelAppoint = (newAppointment)=> {
    //     if ( uniq.includes(newAppointment.id)) {
    //         alert("One Doctor One Appointment!")
    //     }
    //     else {
    //         setAppointments([...appointments,newAppointment])
    //         setUniq([...uniq,newAppointment.id])
    //     }
    //         // setAppointments([...appointments,newAppointment])

    // }
    // console.log(appointments);
    


    // const [doctors,setDoctros] = useState([])
    // useEffect(()=>{
    //     fetch('/data.json').
    //     then(res => res.json()).
    //     then(data => setDoctros(data));
    // },[])
    
    const todayName = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
   });

//    console.log(todayName);


    const {id} = useParams();
    const doctorId = parseInt(id);
    // console.log(doctorId);

    const doctor = doctors.find(doc => doc.id === doctorId);
    // console.log(doctor);

    const {name,doctorImage,education,registrationNumber,worksAt,availableDays,consultationFee} = doctor;

    
    return (
        
        <div className='w-11/12 lg:w-10/12 mx-auto space-y-5'>
            <ToastContainer />
            <div className='mt-6 px-6 py-8 bg-white rounded-2xl'>
                <h1 className='text-3xl md:4xl font-bold text-center'>Doctor’s Profile Details</h1>
                <p className='text-center mt-5'>Doctor's data provided here. All the datas are verified by Government agency. If anyone have any bit of doubt , can Google , or can search officially. </p>
            </div>
            <div className='p-6 bg-white rounded-2xl flex justify-center flex-col md:flex-row gap-5'>
                <div className='w-full md:w-2/5 xl:w-1/3'>
                    <img className='w-full rounded-xl h-96 object-cover' src={doctorImage}  alt="img" />
                </div>
                <div className='pt-4 w-full md:w-3/5 xl:w-4/6'>
                   <h1 className='font-bold text-2xl'>{name}</h1>
                   <p className="font-semibold text-lg mt-5 text-gray-400">{education}</p>
                   <p className="font-semibold text-lg mt-4 text-gray-400">Working at</p>
                   <h2 className="text-xl font-semibold ">{worksAt}</h2>
                   <p className="font-semibold text-gray-400 border-y border-dashed border-gray-400 py-3 mt-5">Reg: {registrationNumber}</p>
                   <div className='mt-6 flex'>
                      <p className='text-xl font-semibold'>Availablity</p>
                      <div className='ml-8 space-x-4 space-y-2 md:space-y-0'>
                         {
                            availableDays.map((day,index) => <button key={index} className='btn btn-outline text-[#FFA000] bg-amber-50 rounded-2xl btn-sm px-2'>{day}</button>)
                         }
                      </div>
                   </div>
                   <p className="mt-6 text-xl font-semibold">Consultarion Fee :<span className='ml-2 text-blue-500'>{consultationFee}</span> Taka <span className='text-gray-400'>{`(including Vat & Tax)`}</span><span className="text-blue-500 font-normal"> Per Consultation.</span></p>
                </div>
            </div>
            <div className='p-6 bg-white rounded-2xl'>
                <h1 className='text-3xl md:4xl text-center font-bold'>Book an Appointment</h1>
                <div className='mt-6 flex justify-between py-5 border-y border-dashed border-gray-400'>
                    <span className='text-xl font-bold'>Availablity</span>
                    <button className="btn btn-sm btn-success btn-outline px-2 rounded-2xl">
                        {
                            availableDays.find(day => day === todayName) ? "Doctor Available Today" : "Doctor Not Available Today"
                        }
                    </button>
                </div>
                <p className='mt-5 border-yellow-300 border py-2 px-3 rounded-3xl text-yellow-300 text-center'><OctagonAlert className='md:mr-5 text-yellow-300 inline'></OctagonAlert>
                  <span> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</span>
                </p>
                <button onClick={()=>{addDocToLSt(doctorId)}} className="btn md:py-4 bg-blue-500 rounded-3xl w-full mt-8 font-semibold text-white">Book Appointment Now</button>
            </div>
        </div>
    )
};

export default DoctorDetails;