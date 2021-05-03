import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { fetchAuthPageApi } from './module/action';
import {Link , NavLink}  from "react-router-dom";
import {useForm} from "react-hook-form";


function AuthPage(props) {

  const {register, handleSubmit, setValue, formState: {errors} } = useForm();

  const [auth, setAuth] = useState({
    taiKhoan :'',
    matKhau : '',
  })

  const handleOnChange = (event) =>{
    const {name, value} = event.target;
    setAuth(auth => ({...auth, [name]: value }))

  }
  const handleAuthPage = (event) =>{
    // console.log(login);
    // event.preventDefault();
    props.fetchAuthPage(auth, props.history);
  }
  const renderNoti = () =>{
    const { err } = props;
    if(err){
      return <div className="alert alert-danger">{err.response.data}</div>
    }
  }

    return (
        <div className="signIn">
          <div className="signIn__content">
            <h3>Đăng nhập</h3>  
            <form onSubmit = {handleSubmit(handleAuthPage)}>
            {renderNoti()}
              <div className="form-group">
                <label htmlFor="taiKhoan" className="labelLogin">Tài khoản</label>
                <input type="text" {...register("taiKhoan", {required: 'Tài khoản không được trống'})} className="form-control" name="taiKhoan" onChange = {handleOnChange}/>
                {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="matKhau" className="labelLogin">Mật khẩu</label>
                <input type="password" {...register('matKhau',{required: 'Mật khẩu không được rỗng'})} className="form-control" name="matKhau" onChange = {handleOnChange}/>
                {errors.matKhau && <span>{errors.matKhau.message}</span>}
              </div>
              <div className="btnLoginRegister__container">
                {/* <button className="btn btn-success btnRegister">
                  <NavLink to="/Register" className="register">Register</NavLink>
                </button> */}
                <button type="submit" className="btn btn-success btnLogin">
                  Login
                </button>
              </div>
            </form>
            <Link to="/admin" className="loginClose"></Link>
          </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
  return {
    err:state.AuthPageReducer.err,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchAuthPage: (user, history) =>{
      dispatch(fetchAuthPageApi(user, history));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthPage);