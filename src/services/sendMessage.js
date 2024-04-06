import axios from "axios"
import Swal from "sweetalert2";

export const sendMessage = async(data) =>{
    return axios.post('https://contact-portfolio-brytnet.koyeb.app/api/v1/contact',data)
    .then((data)=>{
        if(data.status===200){
            Swal.fire({
                icon: "success",
                title: "Mensaje enviado, muchas gracias!",
                showConfirmButton: false,
                timer: 1500
              });
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ha ocurrido un error...",
              });
        }
    })
}