import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../../api/Api';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { DeleteAllCart } from './activiteCart';

export default function Cart() {
  const format = Intl.NumberFormat('en')
  const navigate = useNavigate()
  const [carts, setCarts] = useState();
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  var totalPrice = 0;
  const UpdateQuantity = (e, id) => {
    e.preventDefault()
    var data = JSON.stringify({
      "id": id,
      "quantity": e.target.value
    });

    var config = {
      method: 'put',
      url: Api.Cart,
      headers: {
        'Authorization': localStorage.accessToken,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    loadData()
  }
  const AddOrder = () => {
    if (!name || !email || !phone || !address) {
      toast('Thông tin khách hàng chưa đầy đủ.')
    }
    else {
      var data = JSON.stringify({
        "name": name,
        "email": email,
        "phone": phone,
        "deliveryAddress": address,
        "totalPrice": totalPrice,
        "carts": carts
      });
      var config = {
        method: 'post',
        url: Api.Order,
        headers: {
          'Authorization': localStorage.accessToken,
          'Content-Type': 'application/json'
        },
        data: data
      };
      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          toast(JSON.stringify(response.data.mes));
        })
        .catch(function (error) {
          console.log(error);
        });
        DeleteAllCart()
        setTimeout(() => { navigate('/') }, 2000)
    }
  }
  const DeleteCart = (e, id) => {
    e.preventDefault();
    var data = JSON.stringify({
      "id": id
    });

    var config = {
      method: 'delete',
      url: Api.DeleteCart,
      headers: {
        'Authorization': localStorage.accessToken,
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(res => console.log(res))
      .catch(error => console.log(error));
    loadData()
  }

  const loadData = () => {
    var config = {
      method: 'get',
      url: Api.Cart,
      headers: {
        'Authorization': localStorage.accessToken
      }
    };
    axios(config)
      .then(res => setCarts(res.data.cartData))
      .catch(err => console.log(err));

    var user = {
      method: 'get',
      url: Api.User,
      headers: {
        'Authorization': localStorage.accessToken
      }
    };
    axios(user)
      .then(res => {
        setName(res.data.userData.name)
        setEmail(res.data.userData.email)
        setPhone(res.data.userData.phone)
        setAddress(res.data.userData.address)
      })
  }
  const editCustomerInfo = (e) => {
    e.preventDefault();
    var save = document.getElementById('btnChangeCustomerInfo')
    if (save.innerText === 'Chỉnh sửa') {
      save.innerText = 'Lưu';
      setIsReadOnly(false);
    } else {
      save.innerText = 'Chỉnh sửa';
      setIsReadOnly(true);
    }

  }

  useEffect(() => {
    loadData()
  }, [carts?.length]);
  return (
    <div className='container mb-5 pb-3'>
      {
        (!carts?.length) ? (<div className='d-flex justify-content-center py-5'>
          <img src="client/assets/img/cartnull.png" alt="Cart null" />
        </div>) : (
          <>
            <h1 className='cart-title'>Shopping Cart</h1>
            <div className="shopping-cart">
              <div className="column-labels">
                <label className="product-image">Image</label>
                <label className="product-details">Product</label>
                <label className="product-price">Price</label>
                <label className="product-quantity">Quantity</label>
                <label className="product-removal">Remove</label>
                <label className="product-line-price">Total</label>
              </div>
              {
                carts?.map(cart => {
                  totalPrice += cart.quantity * cart.unitPrice
                  return (
                    <div className="product" key={cart.id}>
                      <div className="product-image">
                        <img src={cart.image} alt='' />
                      </div>
                      <div className="product-details">
                        <div className="product-title">{cart.productName}</div>
                      </div>
                      <div className="product-price">{format.format(cart.unitPrice)}</div>
                      <div className="product-quantity">
                        <input type="number" onChange={e => UpdateQuantity(e, cart.id)} max={5} defaultValue={cart.quantity} min={1} />
                      </div>
                      <div className="product-removal">
                        <button onClick={e => DeleteCart(e, cart.id)} className="remove-product">Xoá</button>
                      </div>
                      <div className="product-line-price">{format.format(cart.unitPrice * cart.quantity)}</div>
                    </div>
                  )
                })
              }
              <div className="totals">
                <div className="totals-item totals-item-total">
                  <div className="totals-value" id="cart-total">Tổng tiền: {format.format(totalPrice)}</div>
                </div>
              </div>
              <div className="info-cart">
                <div className="customer-info">
                  <h2>Thông tin khách hàng</h2>
                  <label htmlFor="name">Họ tên:</label>
                  <input className='inputInfo' type="text" onChange={e => setName(e.target.value)} value={name} readOnly={isReadOnly} /><br />
                  <label htmlFor="email">Email:</label>
                  <input className='inputInfo' type="email" onChange={e => setEmail(e.target.value)} value={email} readOnly={isReadOnly} /><br />
                  <label htmlFor="email">Số điện thoại:</label>
                  <input className='inputInfo' type="text" onChange={e => setPhone(e.target.value)} value={phone} readOnly={isReadOnly} /><br />
                  <label htmlFor="email">Địa chỉ:</label>
                  <input className='inputInfo' type="text" onChange={e => setAddress(e.target.value)} value={address} readOnly={isReadOnly} /><br />
                  <Link id='btnChangeCustomerInfo' onClick={e => editCustomerInfo(e)}>Chỉnh sửa</Link>
                </div>
                <div className="payment-method">
                  <h2>Phương thức thanh toán</h2>
                  <p>Chọn phương thức thanh toán:</p>
                  <form>
                    <div>
                      <input type="radio" id="banktransfer" name="payment" defaultChecked='true' value="Bank Transfer" />
                      <label>Thanh toán khi nhận hàng</label>
                    </div>
                  </form>
                </div>
              </div>
              <Link><button onClick={AddOrder} id='checkout' className="checkout">Thanh toán</button></Link>
            </div>
          </>
        )
      }
      <ToastContainer />
    </div>
  )
}
