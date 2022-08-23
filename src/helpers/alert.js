import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export async function createAlert(icon,title,text){
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
    })
}
