import Swal from 'sweetalert2'
import { toast } from 'react-toastify';

 export const handleSweet = () => {
            Swal.fire({
            title: "Appointment Done",
            text: "Welcome!",    
            icon: "success"
        })
        toast("Appointment Done!");
    }

export const handelToast = () => {
        console.log("hellow");
        alert("Appontment Cencel")
        toast("Appontment Cancel");
    }