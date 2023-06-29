import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'
import axios from 'axios'
import Api from "../../api/Api";

export default function CheckToken() {
    const navigate = useNavigate()
  const [showToast, setShowToast] = useState(false);
  const handleDismiss = () => {
    setShowToast(false);
    localStorage.removeItem('accessToken');
    navigate('/login');
  }
  
  return (
    <div>
      {showToast && (
        <ToastContainer position="top-center" autoClose={false} hideProgressBar={false} closeOnClick pauseOnHover draggable progress={undefined}>
          <div>
            Phiên bản đã hết hạn. Vui lòng đăng nhập lại.
            <button onClick={handleDismiss}>OK</button>
          </div>
        </ToastContainer>
      )}
    </div>
  );
}
