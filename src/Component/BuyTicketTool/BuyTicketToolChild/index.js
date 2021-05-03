import React,{useState,useEffect} from 'react';
import {actFetchTheaterTool} from "./modulesTheater/action";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function BuyTicketToolChild(props) {
    const [cinema, setCinema] = useState({indexShow: 0});
    const [theater,setTheater] = useState({indexTheater: 0});
    const {id} = props;
    useEffect(() => {
        props.fetchTheaterTool(id);
    }, [id])
    const {data} = props;


    const renderHTML = () => {
        return(data&&data.heThongRapChieu.map((item,index)=>{
            const chooseTheater = (e) => {
                const buttonSelected = document.getElementById("buyTicketDropdownTheater");
                const itemSelected = document.getElementById(e.target.id);
                buttonSelected.innerHTML = `${itemSelected.innerHTML}`;
                const getId = document.getElementById("buyTicketDropdownDate");
                if(getId){
                  getId.classList.remove("disabled");
                }
                setCinema({indexShow: index});
            }
            return(item.cumRapChieu.map((item2)=>{
                return(
                    <li>
                        <a className="dropdown-item" id={item2.maCumRap} onClick={chooseTheater} key={item2.maCumRap}>
                            {item2.tenCumRap}
                        </a>
                    </li>
                )
            }))
            
        }))
    }

    const renderHTMLDate = () => {
        return(data&&data.heThongRapChieu[cinema.indexShow].cumRapChieu.map((item)=>{
            return(item.lichChieuPhim.map((item2,index)=>{
                const chooseDate = (e) => {
                    const buttonSelected = document.getElementById("buyTicketDropdownDate");
                    const itemSelected = document.getElementById(e.target.id);
                    buttonSelected.innerHTML = `${itemSelected.innerHTML}`;
                    const getId = document.getElementById("buyTicketDropdownPremiere");
                    if(getId){
                      getId.classList.remove("disabled");
                    }
                    setTheater({indexTheater: item2.maLichChieu});
                }
                return(
                    <li>
                        <a className="dropdown-item" id={item2.maLichChieu} onClick={chooseDate} key={item2.maLichChieu}>
                            {item2.ngayChieuGioChieu.slice(0,10)}
                        </a>
                    </li>
                )
            }))
        }))
    }
    const renderHTMLTimes = () => {
        return(data&&data.heThongRapChieu[cinema.indexShow].cumRapChieu.map((item)=>{
            return(item.lichChieuPhim.map((item2)=>{
                if(item2.maLichChieu===theater.indexTheater){
                    const choosePremiere = (e) => {
                        const buttonSelected = document.getElementById("buyTicketDropdownPremiere");
                        const itemSelected = document.getElementById(e.target.id);
                        buttonSelected.innerHTML = `${itemSelected.innerHTML}`;
                        const getId = document.getElementById("btnBuyTicket");
                        if(getId){
                          getId.classList.remove("disabled");
                        }
                        setTheater({indexTheater: item2.maLichChieu});
                      }
                    return(
                        <li>
                            <a className="dropdown-item" id={item2.maLichChieu} onClick={choosePremiere} key={item2.maLichChieu}>
                                {item2.ngayChieuGioChieu.slice(11,19)}
                            </a>
                        </li>
                    )
                }
            }))
        ;}))
    }
      
      
    return (
        <>
        <div className="dropdown -selectCinema">
                <button
                className="btn btn-secondary dropdown-toggle disabled"
                type="button"
                id="buyTicketDropdownTheater"
                data-toggle="dropdown"
                aria-expanded="false"
                >
                Rạp
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {renderHTML()}
                </ul>
            </div>
            <div className="dropdown -selectDate">
                <button
                className="btn btn-secondary dropdown-toggle disabled"
                type="button"
                id="buyTicketDropdownDate"
                data-toggle="dropdown"
                aria-expanded="false"
                >
                Ngày Xem
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {renderHTMLDate()}
                </ul>
            </div>
            <div className="dropdown -selectSession">
                <button
                className="btn btn-secondary dropdown-toggle disabled"
                type="button"
                id="buyTicketDropdownPremiere"
                data-toggle="dropdown"
                aria-expanded="false"
                >
                Suất Chiếu
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {renderHTMLTimes()}
                </ul>
            </div>
            <div className="buy__button">
                <Link to={`/checkout/${theater.indexTheater}`}><button className="btn btn-secondary -enabled disabled" id="btnBuyTicket">Mua Vé Ngay</button></Link>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      data: state.listToolTheaterReducer.data,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchTheaterTool: (id) => {
        dispatch(actFetchTheaterTool(id));
      },
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(BuyTicketToolChild)