import React, { memo, useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './../../Asset/img/Logo.png';
import {
  faMapMarkerAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { TOKEN, USRELOGIN } from "../../util/settings";
import Popup from 'reactjs-popup';
// import {
//   Link,
//   animateScroll as scroll,
// } from "react-scroll";

function NavbarHome() {
  const [addActiveClass, setActiveClass] = useState(false);
  const dropdownButton = useRef();
  const dropdown = useRef();

  const { data } = useSelector(state => state.LoginReducer);
  // // const {taiKhoan} = data;
  // console.log(data);

  const handleOnClick = () => {
    if (addActiveClass === false) {
      setActiveClass(true);
    } else if (addActiveClass === true) {
      setActiveClass(false);
    }
  };

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  const handleClickOutside = event => {
    if (dropdown.current && !dropdown.current.contains(event.target) && dropdownButton.current && !dropdownButton.current.contains(event.target)) {
      setVisible(true);
      setActiveClass(false);
      setVisible(false);
    } else {
      setVisible(false);
    }
  };

  const chooseLocation = (e) => {
    const buttonSelected = document.getElementById("dropdownMenu2");
    const itemSelected = document.getElementById(e.target.id);
    buttonSelected.innerHTML = `${itemSelected.innerHTML}`;
  }

  return (
    <header className="navbar__container" id="header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar__header">
          {/* Brand */}
          <div className="left">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          {/* Toggler/collapsibe Button */}
          <button
            type="button"
            onClick={handleOnClick}
            className="navbar-toggler toggler__header"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={dropdownButton}
          >
            <span className={`navbar__toggler__icon ${addActiveClass ? "active" : ""}`} id="toggler__icon" />
          </button>
          {/* Navbar links */}
          <div className={`collapse navbar-collapse collapse__header ${isVisible ? "show" : ""}`} id="navbarSupportedContent"  tabIndex="0" ref={dropdown}>
              {/* {state && ( */}
                <ul className="navbar-nav nav__header">
                  <li className="nav-item nav__item">
                    <a className="nav-link nav__link" href="/#homeMovie">L???ch Chi???u</a>
                  </li>
                  <li className="nav-item nav__item">
                    <a className="nav-link nav__link" href="/#theater">C???m R???p</a>
                  </li>
                  <li className="nav-item nav__item">
                    <a className="nav-link nav__link" href="/#news">Tin T???c</a>
                  </li>
                  <li className="nav-item nav__item">
                    <a className="nav-link nav__link" href="/#MobileApp">???ng D???ng</a>
                  </li>
                  <li className="nav-item select__location nav__item" id="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="map__icon" />
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle btn__location" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={chooseLocation}>
                        H??? Ch?? Minh
                      </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button" id="1" onClick={chooseLocation}>
                      H??? Ch?? Minh
                        </button>
                    <button className="dropdown-item" type="button" id="2" onClick={chooseLocation}>
                      H?? N???i
                        </button>
                    <button id="3" onClick={chooseLocation} className="dropdown-item" type="button">
                      ???? N???ng
                        </button>
                    <button id="4" onClick={chooseLocation} className="dropdown-item" type="button">
                      H???i Ph??ng
                        </button>
                    <button id="5" onClick={chooseLocation} className="dropdown-item" type="button">
                      Bi??n Ho??
                        </button>
                    <button id="6" onClick={chooseLocation} className="dropdown-item" type="button">
                      Nha Trang
                        </button>
                    <button id="7" onClick={chooseLocation} className="dropdown-item" type="button">
                      B??nh D????ng
                        </button>
                    <button id="8" onClick={chooseLocation} className="dropdown-item" type="button">
                      Phan Thi???t
                        </button>
                    <button id="9" onClick={chooseLocation} className="dropdown-item" type="button">
                      H??? Long
                        </button>
                    <button id="10" onClick={chooseLocation} className="dropdown-item" type="button">
                      C???n Th??
                        </button>
                    <button id="11" onClick={chooseLocation} className="dropdown-item" type="button">
                      V??ng T??u
                        </button>
                    <button id="12" onClick={chooseLocation} className="dropdown-item" type="button">
                      Quy Nh??n
                        </button>
                    <button id="13" onClick={chooseLocation} className="dropdown-item" type="button">
                      Hu???
                        </button>
                    <button id="14" onClick={chooseLocation} className="dropdown-item" type="button">
                      Long Xuy??n
                        </button>
                    <button id="15" onClick={chooseLocation} className="dropdown-item" type="button">
                      Th??i Nguy??n
                        </button>
                    <button id="16" onClick={chooseLocation} className="dropdown-item" type="button">
                      Bu??n Ma Thu??t
                        </button>
                    <button id="17" onClick={chooseLocation} className="dropdown-item" type="button">
                      B???c Giang
                        </button>
                    <button id="18" onClick={chooseLocation} className="dropdown-item" type="button">
                      B???n Tre
                        </button>
                    <button id="19" onClick={chooseLocation} className="dropdown-item" type="button">
                      Vi???t Tr??
                        </button>
                    <button id="20" onClick={chooseLocation} className="dropdown-item" type="button">
                      Ninh B??nh
                        </button>
                    <button id="21" onClick={chooseLocation} className="dropdown-item" type="button">
                      Th??i B??nh
                        </button>
                    <button id="22" onClick={chooseLocation} className="dropdown-item" type="button">
                      Vinh
                        </button>
                    <button id="23" onClick={chooseLocation} className="dropdown-item" type="button">
                      B???o L???c
                        </button>
                    <button id="24" onClick={chooseLocation} className="dropdown-item" type="button">
                      ???? L???t
                        </button>
                    <button id="25" onClick={chooseLocation} className="dropdown-item" type="button">
                      Tr?? Vinh
                        </button>
                    <button id="26" onClick={chooseLocation} className="dropdown-item" type="button">
                      Y??n B??i
                        </button>
                    <button id="27" onClick={chooseLocation} className="dropdown-item" type="button">
                      Ki??n Giang
                        </button>
                    <button id="28" onClick={chooseLocation} className="dropdown-item" type="button">
                      V??nh Long
                        </button>
                    <button id="29" onClick={chooseLocation} className="dropdown-item" type="button">
                      C?? Mau
                        </button>
                    <button id="30" onClick={chooseLocation} className="dropdown-item" type="button">
                      H???u Giang
                        </button>
                    <button id="31" onClick={chooseLocation} className="dropdown-item" type="button">
                      T??y Ninh
                        </button>
                    <button id="32" onClick={chooseLocation} className="dropdown-item" type="button">
                      Tuy??n Quang
                        </button>
                    <button id="33" onClick={chooseLocation} className="dropdown-item" type="button">
                      Thanh Ho??
                        </button>
                    <button id="34" onClick={chooseLocation} className="dropdown-item" type="button">
                      Nam ?????nh
                        </button>
                    <button id="35" onClick={chooseLocation} className="dropdown-item" type="button">
                      H???i D????ng
                        </button>
                    <button id="36" onClick={chooseLocation} className="dropdown-item" type="button">
                      Gia Lai
                        </button>
                    <button id="37" onClick={chooseLocation} className="dropdown-item" type="button">
                      H?? T??nh
                        </button>
                    <button id="38" onClick={chooseLocation} className="dropdown-item" type="button">
                      Ph?? Y??n
                        </button>
                    <button id="39" onClick={chooseLocation} className="dropdown-item" type="button">
                      B???c Li??u
                        </button>
                    <button id="40" onClick={chooseLocation} className="dropdown-item" type="button">
                      Long An
                        </button>
                    <button id="41" onClick={chooseLocation} className="dropdown-item" type="button">
                      ?????ng H???i
                        </button>
                    <button id="42" onClick={chooseLocation} className="dropdown-item" type="button">
                      H?? Nam
                        </button>
                    <button id="43" onClick={chooseLocation} className="dropdown-item" type="button">
                      B???c Ninh
                        </button>
                    <button id="44" onClick={chooseLocation} className="dropdown-item" type="button">
                      Qu???ng Tr???
                        </button>
                    <button id="45" onClick={chooseLocation} className="dropdown-item" type="button">
                      Kon Tum
                        </button>
                    <button id="46" onClick={chooseLocation} className="dropdown-item" type="button">
                      S??c Tr??ng
                        </button>
                    <button id="47" onClick={chooseLocation} className="dropdown-item" type="button">
                      S??n La
                        </button>
                    <button id="48" onClick={chooseLocation} className="dropdown-item" type="button">
                      L???ng S??n
                        </button>
                    <button id="49" onClick={chooseLocation} className="dropdown-item" type="button">
                      Qu???ng Ng??i
                        </button>
                    <button id="50" onClick={chooseLocation} className="dropdown-item" type="button">
                      M??? Tho
                        </button>
                    <button id="51" onClick={chooseLocation} className="dropdown-item" type="button">
                      ?????ng Th??p
                        </button>
                    <button id="52" onClick={chooseLocation} className="dropdown-item" type="button">
                      H??ng Y??n
                        </button>
                  </ul>
                </div>
              </li>
            </ul>
            {/* )} */}
          </div>
          <div className="right">
            <div className="user__account">
              <FontAwesomeIcon icon={faUserCircle} className="user__avatar" />
              <Popup trigger={data ? <NavLink className="user__account__name" to="/">{data.taiKhoan}</NavLink> : <NavLink className="user__account__name" to="/Login">????ng nh???p</NavLink>} position="bottom center" >
              <a onClick={()=>{
                  localStorage.removeItem(USRELOGIN);
                  localStorage.removeItem(TOKEN);
                  window.location.reload();
                }} className="logOut">????ng xu???t</a>
              </Popup>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default memo(NavbarHome);
