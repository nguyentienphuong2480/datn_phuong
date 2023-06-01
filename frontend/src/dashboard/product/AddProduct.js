import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Api from "../../api/Api"
import { Link } from 'react-router-dom'

export default function AddProduct() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [subcat, setSubcat] = useState();
    const [avaliable, setAvaliable] = useState();
    const [image, setImage] = useState();
    const [images, setImages] = useState();
    const [price, setPrice] = useState();
    const [expiry, setExpiry] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [subcategorys, setSubcategorys] = useState();
    const [brands, setBrands] = useState();
    const [imgSrc, setImgSrc] = useState("");

    function handleOnChange(event) {
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
        data.append('subcat', subcat)
        data.append('avaliable', avaliable)
        data.append('image', image)
        data.append('price', price)
        data.append('expiry', expiry)
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
                    navigate('/admin/listProduct')
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
    // window.addEventListener("load", previewImages());
    const previewImages = () => {
        const fileInput = document.getElementById("myFileInput");
        const imageContainer = document.getElementById("imagePreview");

        
        // Xóa hình ảnh cũ trong container
        if (imageContainer) imageContainer.innerHTML = "";

        // Lấy danh sách các tập tin được chọn
        const files = fileInput && fileInput.files;


        // Lặp qua từng tập tin và thêm ảnh vào container
        for (let i = 0; i < files && files.length; i++) {
            const file = files[i];
            

            // Kiểm tra xem tệp tin có phải là hình ảnh hay không
            if (!file.type.startsWith("image/*")) {

                continue;
            }

            // Tạo một đối tượng URL để truy cập URL của tệp
            const imageURL = URL.createObjectURL(file);


            // Tạo một thẻ img mới và thêm đường dẫn URL vào thuộc tính src của nó
            const imageElement = document.createElement("img");
            imageElement.src = imageURL;
            console.log(imageElement)
            // Thêm thẻ img vào container
            imageContainer.appendChild(imageElement);
        }
    }

    // Gọi hàm previewImages()
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
                                <input type="text" className="form-control " placeholder="Tên sản phẩm" />
                            </div>
                            <div className="col-sm-6">
                                <select defaultValue='default' className="form-control ">
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
                                <label>Ảnh chính</label>
                                <input type="file" accept="image/*" onChange={handleOnChange} />
                                {imgSrc && <img src={imgSrc} alt="selected" />}
                            </div>
                            <div className="col-sm-6">
                                <label>Ảnh liên quan</label>
                                <input type="file" accept="image/*" id="myFileInput" onChange={previewImages} multiple />
                                <div id="imagePreview" ></div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" className="form-control " placeholder="Giá" />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" placeholder="Mô tả sản phẩm" />
                            </div>
                        </div>
                        <Link className="btn btn-primary btn-block">
                            Thêm sản phẩm
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}