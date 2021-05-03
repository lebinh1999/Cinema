import React from 'react';
import { Link } from "react-router-dom";

function DetailTabPaneItemShowTime(props) {

    const {data} = props;

    const renderListDetailShowTime = () => {
        return (data && data.map((item) => {
            return(
                <div className="theater__sessions" key={item.maLichChieu}>
                    <Link to={`/checkout/${item.maLichChieu}`} className="sessions__btn">
                        <span className="sessions__span">{item.ngayChieuGioChieu.slice(11,16)}</span>~ 16:45
                    </Link>
                </div> 
            )
        }))
    }

    return (
        <>
            <div className="theaterItem__header">2D Digital</div>
            <div className="theater__sessionsContainer">
                {renderListDetailShowTime()}
            </div>

        </>
    )
}

export default DetailTabPaneItemShowTime
