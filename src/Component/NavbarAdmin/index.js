import React,{useState} from 'react';
import logo from './../../Asset/img/Logo.png';
import { NavLink,Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHome, faThLarge, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function NavbarAdmin() {
  const [addShowClassDropdownNav, setShowClassDropdownNav] = useState(false);
  const handleOnClickCollapseBtn = () => {
    if(addShowClassDropdownNav === false){
      setShowClassDropdownNav(true);
    }else if(addShowClassDropdownNav === true){
      setShowClassDropdownNav(false);
    }
  };
  return (
      <div className="controlNav">
        <div className="controlNav__container">
          <div className="controlNav__top">
            <div className="controlNav__logo">
              <img src={logo} alt=""/>
            </div>
            <div className="controlNav__title">Control Navigation</div>
          </div>
          <div className="controlNav__main">
            <div className="controlNav__services">
              <ul className="nav nav-pills flex-column mb-auto controlNav__nav" id="control-tab" role="tablist" aria-orientation="vertical">
                <li className="nav-item controlNav__dropdownItem">
                  <Link className="nav-link controlNav__dropdownLink" to="/">
                    <FontAwesomeIcon icon={faHome} className="controlNav__icon"/>
                    Home
                  </Link>
                </li>
                <li className="nav-item controlNav__dropdownItem">
                  <NavLink className="nav-link controlNav__dropdownLink" to="/movieControlPage">
                    <FontAwesomeIcon icon={faFilm} className="controlNav__icon"/>
                    quản lý phim
                  </NavLink>
                </li>
                <li className="nav-item controlNav__dropdownItem">
                  <NavLink className="nav-link controlNav__dropdownLink" to="/userPage">
                    <FontAwesomeIcon icon={faUserCircle} className="controlNav__icon"/>
                    quản lý người dùng
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

  )
}
export default NavbarAdmin
