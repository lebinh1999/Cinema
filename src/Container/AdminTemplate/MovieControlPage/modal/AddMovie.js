import React, { Component } from 'react';
import axios from "axios";

export default class AddMovie extends Component {
    state = {
        hinhAnh: {},
        maPhim: "",
        tenPhim: "",
        trailer: "",
        moTa: "",
        maNhom: "GP11",
    }
    handleChange = (e) => {
        let target = e.target;
        if(target.name==='hinhAnh'){
            this.setState({hinhAnh: e.target.files[0]},()=>{
                console.log(this.state);
            });
        }else{
            this.setState({[e.target.name]:e.target.value},()=>{
                console.log(this.state);
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var form_data = new FormData();
        for(var key in this.state){
            form_data.append(key,this.state[key]);
            console.log("tenPhim",form_data.get(key));
        }

        // console.log("tenPhim",form_data.get('tenPhim'));
        // return;

        axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
            method: "POST",
            data:form_data,
        })
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err.response.data);
        })
    }
    render() {
        return (
                <>
                    {/* Modal */}
                    <div className="modal fade" id="modalAddMovie" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal__dialog" role="document">
                            <div className="modal-content modalAddMovie__content">
                                <div className="modal-header modalAddMovie__header">
                                    <span className="modalAddMovie__headerText">thêm phim</span>
                                </div>
                                <div className="modal-body modalAddMovie__body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label className="form__label">Mã Phim:</label>
                                            <input name="maPhim" type="text" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Tên Phim:</label>
                                            <input name="tenPhim" type="text" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Trailer:</label>
                                            <input name="trailer" type="text" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Hình Ảnh:</label>
                                            <input name="hinhAnh" type="file" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Mô Tả:</label>
                                            <input name="moTa" type="text" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form__label">Mã Nhóm:</label>
                                            <input name="maNhom" value="GP11" type="text" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <button type="submit" className="form-control">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        )
    }
}

