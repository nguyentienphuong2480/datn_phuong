import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/Api';
import axios from 'axios'

export default function Cart() {
  const format = Intl.NumberFormat('en')
  const [carts, setCarts] = useState();
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
  }
  useEffect(() => {
    loadData()
  }, [carts?.length]);
  return (
    <div className='container'>
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
                        <img src={cart.image} alt=''/>
                      </div>
                      <div className="product-details">
                        <div className="product-title">{cart.productName}</div>
                      </div>
                      <div className="product-price">{format.format(cart.unitPrice)}</div>
                      <div className="product-quantity">
                        <input type="number" onChange={e => UpdateQuantity(e, cart.id)} max={5} defaultValue={cart.quantity} min={1} />
                      </div>
                      <div className="product-removal">
                        <button onClick={e => DeleteCart(e, cart.id)} className="remove-product">Remove</button>
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
              <Link><button className="checkout">Checkout</button></Link>
            </div>
          </>
        )
      }
    </div>
  )
}
