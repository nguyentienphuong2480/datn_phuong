import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Api from "../../api/Api"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";


function EditBrand() {
    const navigate = useNavigate()
    var id = useParams()
    const checkimg = useRef()
    const [name, setName] = useState();
    const [image, setImage] = useState();
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
    
    const HandleSave =() =>{
        const data = new FormData()
        data.append('name', name)
        if(image!==checkimg){
            data.append('image', image)
        }
        data.append('id', +id.id)

        axios({
            method: 'PUT',
            url: Api.EditBrand,
            headers:{
                Authorization: localStorage.accessToken
            },
            data: data
        })
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                toast(JSON.stringify(response.data.mes))
                setTimeout(()=>{
                    navigate('/dashboard/listBrand')
                },2000)
                
            })
            .catch(function (error) {
                console.log(error);
                toast(error.response.data.mes)
            });
        
    }
    
    useEffect(() => {
        const loadData = () =>{
        axios({
            method: "GET",
            url: Api.GetOneBrand(id.id),
            headers:{
                Authorization: localStorage.accessToken
            }
        })
        .then(res=>{
            setName(res.data.brandData.name);
            setImage(res.data.brandData.image);
            checkimg.current = res.data.brandData.image;
            setImgSrc(res.data.brandData.image)
        })
        .catch(err=>console.log(err))
    }
        loadData();
    },[id?.id]);
    console.log(image)
    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm thương hiệu</h6>
                </div>
                <div className="card-body">
                    <form className="user">
                        <div className="form-group row">
                            <div className="col-sm-12 mb-3 mb-sm-0">
                                <input value={name} type="text" onChange={e => setName(e.target.value)} className="form-control " placeholder="Tên thương hiệu" />
                            </div>
                            
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <label>Hình ảnh</label>
                                <input type="file" accept="image/*" onChange={e =>handleOnChange(e)} />
                                {imgSrc && <img src={imgSrc} alt="" />}
                            </div>
                        </div>
                        <Link onClick={HandleSave} className="btn btn-primary btn-block">
                            Lưu
                        </Link>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default EditBrand