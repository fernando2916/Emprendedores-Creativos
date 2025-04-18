import { FC, useEffect } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

interface SweetAlertProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info'
}
 
export const SweetAlert2: FC<SweetAlertProps> = ({ message, type}) => {
  useEffect(() => {
    Swal.fire({
      icon: type,
        title: message,
        background: '#120024',
        color: '#ffffff',
        timer: 3000,
    });
  }, [message, type])
  
  return null;
}
