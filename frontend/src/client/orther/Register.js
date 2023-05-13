import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { validName, validEmail, validPassword } from '../../validation/Validation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import Api from "../../api/Api"


export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [password_confirm, setPassword_confirm] = useState();
    const SignIn = (e) => {
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
        setTimeout(() => {
            navigate('/login')
        }, 500)
    }
    const RegisterSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !password_confirm)
            toast.error("Vui lòng nhập đủ thông tin", {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            })
        else {
            if (password !== password_confirm)
                toast.error("Mật khẩu và xác thực mật khẩu không giống nhau", {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                })
            if (!validName.test(name))
                toast.error("Họ tên không hợp lệ", {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                })
            if (!validEmail.test(email))
                toast.error("Email không hợp lệ", {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                })
            if (!validPassword.test(password))
                toast.error("Mật khẩu ít nhất có 6 kí tự và phải có chữ hoa, chữ thường và số", {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                })
        }
        var data = JSON.stringify({
            "email": email,
            "password": password,
            "name": name
          });
          
          var config = {
            method: 'post',
            url: Api.Register,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            if(response.data.err)
            toast(JSON.stringify(response.data.mes))
            else{
            toast('Đăng ký thành công.\r\nVui lòng đăng nhập lại.');
            setTimeout(()=>{
                navigate('/login')
            },6000)
        }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className='login'>
            <div className="wrap right-panel-active" id="container">
                <div className="form-container sign-up-container">
                    <form className='form-login'>
                        <h1>Tạo tài khoản</h1>
                        <input className='input-login' onChange={e => setName(e.target.value)} type="text" placeholder="Tên đăng nhập" />
                        <input className='input-login' onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                        <input className='input-login' onChange={e => setPassword(e.target.value)} type="password" placeholder="Mật khẩu" />
                        <input className='input-login' onChange={e => setPassword_confirm(e.target.value)} type="password" placeholder="Xác thực mật khẩu" />
                        <button onClick={e => RegisterSubmit(e)} className='btn-login'>Tạo tài khoản</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Chào mừng bạn!</h1>
                            <p> Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
                            <button onClick={e => SignIn(e)} className="ghost btn-login" id="signIn">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link className='comeback' to='/'><i className='far fa-arrow-alt-circle-left comeback' ></i></Link>
            <ToastContainer />
        </div>
    );
}