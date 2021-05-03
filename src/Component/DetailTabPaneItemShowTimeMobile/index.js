import React from 'react';
import {Link } from "react-router-dom"

function DetailTabPaneItemShowTimeMobile(props) {

    const { data } = props;

    const renderListDetailShowTimeMobile = () => {
        return(data&&data.map((item)=>{
            return (
                <div className="theater__sessionsMobile" key={item.maLichChieu}>
                    <Link to={`/checkout/${item.maLichChieu}`} className="sessions__btnMobile">
                        <span className="sessions__spanMobile">{item.ngayChieuGioChieu.slice(11, 16)}</span>~ 16:45
                    </Link>
                </div>   
            )
        }))
    }


    return (
        <>
            <div className="theaterItem__headerMobile">2D Digital</div>
            <div className="theater__sessionsContainerMobile">
                {renderListDetailShowTimeMobile()}
            </div>
        </>
    )
}
export default DetailTabPaneItemShowTimeMobile