import axios from "axios";
import Api from "../../api/Api";
import 'react-toastify/dist/ReactToastify.css'

export function AddToCart(e, id) {
    e.preventDefault();
    var data = JSON.stringify({
        "id": id
    });

    var config = {
        method: 'post',
        url: Api.AddCart,
        headers: {
            'Authorization': localStorage.accessToken,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
    .then(res => console.log(res))
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteCart(e, id) {
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
}

export function DeleteAllCart() {
    // console.log('dete')
    // e.preventDefault();
    // var data = JSON.stringify({
    //     "id": id
    // });

    var config = {
        method: 'delete',
        url: Api.DeleteAllCart,
        headers: {
            'Authorization': localStorage.accessToken,
            'Content-Type': 'application/json'
        },
        // data: data
    };
    axios(config)
        .then(res => console.log(res))
        .catch(error => console.log(error));
}