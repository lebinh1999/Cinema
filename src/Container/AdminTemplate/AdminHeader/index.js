import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import { USRELOGIN,TOKEN } from '../../../util/settings';
import {useSelector} from "react-redux";
import Popup from 'reactjs-popup';

function AdminHeader(props) {
    const {data} = useSelector(state => state.AuthPageReducer)
    return (
        <div className="adminHeader">
            <form action="" className="searchForm">
                <input className="form-control form-control-dark form__searchArea" placeholder="Search" aria-label="Search"></input>
                <button type="submit" className="btnSearch__text" id="btnSearch">
                    <FontAwesomeIcon icon={faSearch} className="search__icon"/>
                </button>
            </form>
            
            <div className="adminPage__user">
                <div className="adminPage__avatar">
                    <img src={require("./../../../Asset/img/photo.png").default}/>
                </div>
                <Popup trigger={data ? <NavLink className="adminPage__userName" to="/admin">{data.taiKhoan}</NavLink> : <NavLink className="adminPage__userName" to="/Login">Đăng nhập</NavLink>} position="bottom center" >
              <a onClick={()=>{
                  localStorage.removeItem(USRELOGIN);
                  localStorage.removeItem(TOKEN);
                  window.location.reload();
                }} className="logOutAdmin">Đăng xuất</a>
              </Popup>
            </div>
        </div>
    )
}
export default AdminHeader