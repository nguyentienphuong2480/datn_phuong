import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate , Link} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Api from "../../api/Api"

export default function AddProduct() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [image, setImage] = useState();
    const [price, setPrice] = useState();
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [brands, setBrands] = useState();
    const [imgSrc, setImgSrc] = useState("");

    function handleOnChange(event) {
        setImage(event.target.files[0])
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setImgSrc(reader.result);
        };
    }
    const HandleSave = () => {
        const data = new FormData()
        data.append('name', name)
        data.append('image', image)
        data.append('price', price)
        data.append('brand', brand)
        data.append('description', description)
        axios({
            method: 'POST',
            url: Api.AddProduct,
            headers: {
                Authorization: localStorage.accessToken
            },
            data: data
        })
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                toast(JSON.stringify(response.data.mes))
                setTimeout(() => {
                    navigate('/dashboard/listProduct')
                }, 2000)

            })
            .catch(function (error) {
                console.log(error);
                toast(error.response.data.mes)
            });
    }
    const loadData = () => {
        axios.get(Api.Brand)
            .then(res => setBrands(res.data.brandData))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, []);
    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
                </div>
                <div className="card-body">
                    <form className="user">
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input onChange={e => setName(e.target.value)} type="text" className="form-control " placeholder="Tên sản phẩm" />
                            </div>
                            <div className="col-sm-6">
                                <select defaultValue='default'  onChange={e => setBrand(e.target.value)} className="form-control ">
                                    <option value="default" disabled={true}>Chọn thương hiệu</option>
                                    {
                                        brands?.map(item => {
                                            return (<option key={item.id} value={item.id}>{item.name}</option>)
                                        })
                                    }

                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="number" onChange={e => setPrice(e.target.value)} className="form-control " placeholder="Giá" />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" onChange={e => setDescription(e.target.value)} className="form-control" placeholder="Mô tả sản phẩm" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <label>Hình ảnh</label>
                                <input type="file" accept="image/*" onChange={handleOnChange} />
                                {imgSrc && <img className='w-25' src={imgSrc} alt="selected" />}
                            </div>
                        </div>
                        <Link  onClick={HandleSave} className="btn btn-primary btn-block">
                            Thêm sản phẩm
                        </Link>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}