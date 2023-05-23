import React, {  useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import Api from "../../api/Api"

export default function Login() {
    var user ={}
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const SignUp = (e) => {       
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
        setTimeout(()=>{
            navigate('/register')
        },500)
    }
    const btnLogin = () => {
        var data = JSON.stringify({
          "email": email,
          "password": password
        });
        var config = {
          method: 'post',
          url: Api.Login,
          headers: {
            'Content-Type': 'application/json',
          },
          data: data
        };
        axios(config)
          .then(res => {
            user = res.data
            if (user.err) toast(user.mes)
            else {
              localStorage.setItem('accessToken', user.accessToken);
              var check = {
                method: 'get',
                url: Api.User,
                headers: {
                  Authorization: user.accessToken
                }
              }
              axios(check)
                .then(res => {
                  toast('Logged in successfully')
                  setTimeout(() => {
    
                    (res.data.userData.roleData.code === 'R1') ? navigate('/admin') : navigate('/')
                  }, 6000)
    
    
                })
                .catch(err => console.log(err))
            }
          })
          .catch(err => {
            console.log(err)
            toast(err.response.data.mes)
          });
      }
      
    return (
        <div className='login'>
            <div className="wrap" id="container">
                <div className="form-container sign-in-container">
                    <div className='form-login'>
                        <h1>Đăng nhập</h1>
                        <input className='input-login' onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
                        <input className='input-login' onChange={e=>setPassword(e.target.value)} type="password" placeholder="Mật khẩu" />
                        <a className='social' href="/">Quên mật khẩu</a>
                        <button onClick={btnLogin} className='btn-login'>Đăng nhập</button>
                    </div>
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