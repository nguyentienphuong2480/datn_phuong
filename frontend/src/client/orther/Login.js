import React, {  useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Register from './Register'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import Api from "../../api/Api"

export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [password_confirm, setPassword_confirm] = useState();
    const SignUp = (e) => {       
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
        setTimeout(()=>{
            navigate('/register')
        },500)
    }
    return (
        <div className='login'>
            <div className="wrap" id="container">
                <div className="form-container sign-in-container">
                    <form className='form-login'>
                        <h1>Đăng nhập</h1>
                        <input className='input-login' onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
                        <input className='input-login' onChange={e=>setPassword(e.target.value)} type="password" placeholder="Mật khẩu" />
                        <a className='social' href="/">Quên mật khẩu</a>
                        <button className='btn-login'>Đăng nhập</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Xin chào!</h1>
                            <p> Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi</p>
                            <button onClick={e => SignUp(e)} className="ghost btn-login" id="signUp">Tạo tài khoản</button>
                        </div>
                    </div>
                </div>
            </div>

            <Link className='comeback' to='/'><i className='far fa-arrow-alt-circle-left comeback' ></i></Link>
            <ToastContainer/>
        </div>
    );
}