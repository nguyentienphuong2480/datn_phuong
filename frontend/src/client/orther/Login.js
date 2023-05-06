import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    const SignUp = (e) => {
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");


    }
    const SignIn = (e) => {
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");

    }
    return (
        <div className='login'>
            <div className="wrap" id="container">
                <div className="form-container sign-up-container">
                    <form className='form-login'>
                        <h1>Tạo tài khoản</h1>
                        {/* <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span> */}
                        <input className='input-login' type="text" placeholder="Tên đăng nhập" />
                        <input className='input-login' type="email" placeholder="Email" />
                        <input className='input-login' type="password" placeholder="Mật khẩu" />
                        <button className='btn-login'>Tạo tài khoản</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className='form-login'>
                        <h1>Đăng nhập</h1>
                        <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>Hoặc sử dụng tài khoản của bạn</span>
                        <input className='input-login' type="email" placeholder="Email" />
                        <input className='input-login' type="password" placeholder="Mật khẩu" />
                        <a className='social' href="/">Quên mật khẩu</a>
                        <button className='btn-login'>Đăng nhập</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Chào mừng bạn!</h1>
                            <p> Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
                            <button onClick={e => SignIn(e)} className="ghost btn-login" id="signIn">Đăng nhập</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Xin chào!</h1>
                            <p> Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi</p>
                            <button onClick={e => SignUp(e)} className="ghost btn-login" id="signUp">Tạo tài khoản</button>
                        </div>
                    </div>
                </div>
            </div>

            <Link className='comeback' to='/'><i className='far fa-arrow-alt-circle-left comeback' ></i></Link>
        </div>
    );
}

