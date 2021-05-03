import React, {useState} from 'react';
import { connect } from "react-redux";
import { fetchAddUserApi } from './module/action';
import { useForm } from "react-hook-form";

function AddUser(props) {
    const [user, setUser] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: "",
      })
      const { register, handleSubmit, setValue, formState: { errors } } = useForm();

      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser(
          user => ({ ...user, [name]: value })
        )
      }
      const handleAddUser = (e) => {
        // e.preventDefault();
        props.fetchAddUser(user);
    
      }
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="modalAddUser" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal__dialog" role="document">
                    <div className="modal-content modalAddMovie__content">
                        <div className="modal-header modalAddMovie__header">
                            <span className="modalAddMovie__headerText">Thêm người dùng</span>
                        </div>
                        <div className="modal-body modalAddMovie__body">
                            <form onSubmit = {handleSubmit(handleAddUser)}>
                                <div className="form-group">
                                    <label htmlFor="taiKhoan" className="form__label">Tài Khoản:</label>
                                    <input name="taiKhoan" {...register("taiKhoan", {required:'Tài khoản không được rỗng'})} type="text" className="form-control" onChange ={handleOnChange} />
                                    {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
                                </div>
                                <div className="form-group">
                                    <label className="form__label">Mật Khẩu:</label>
                                    <input name="matKhau" type="password" className="form-control" onChange ={handleOnChange} />
                                </div>
                                <div className="form-group">
                                    <label className="form__label">Email:</label>
                                    <input name="email" type="email" className="form-control"  onChange ={handleOnChange}/>
                                </div>
                                <div className="form-group">
                                    <label className="form__label">Số Điện Thoại:</label>
                                    <input name="soDt" type="tel" className="form-control"  onChange ={handleOnChange}/>
                                </div>
                                <div className="form-group">
                                    <label className="form__label">Mã Nhóm:</label>
                                    <input name="maNhom" value="GP01" type="text" className="form-control"  onChange ={handleOnChange}/>
                                </div>
                                <div className="form-group">
                                    <label className="form__label">Mã Loại Người Dùng:</label>
                                    <select name="maLoaiNguoiDung" type="text" className="form-control"  onChange ={handleOnChange}>
                                        <option value="KhachHang">Khách Hàng</option>
                                        <option value="QuanTri">Quản Trị</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form__label">Họ Tên:</label>
                                    <input name="hoTen" type="text" className="form-control" onChange ={handleOnChange}/>
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

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchAddUser: (user)=>{
            dispatch(fetchAddUserApi(user))
        }
    }
}

export default  connect(null, mapDispatchToProps)(AddUser)