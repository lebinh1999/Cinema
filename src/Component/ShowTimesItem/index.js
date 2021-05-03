import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";

export default function ShowTimesItem(props) {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const { danhSachPhim } = props;
  });

  const renderBtn = (lstLichChieuTheoPhim, maPhim) => {
    return lstLichChieuTheoPhim.map((item) => {
      return (
        <div className="theater__sessions">
          <Link to={`/checkout/${item.maLichChieu}`} className="sessions__btn">
            <span className="sessions__span">
              {item.ngayChieuGioChieu.slice(11, 16)}
            </span>
            ~
            {item.ngayChieuGioChieu.slice(11, 16)}
          </Link>
        </div>
      );
    });
  };

  const renderItem = () => {
    return props.danhSachPhim.map((item) => {
      const handleShowTimeMovie = () => {
        const getTheaterItemRow = document.getElementById(item.maPhim);
        if(!(getTheaterItemRow&&getTheaterItemRow.classList.contains("show"))){
          getTheaterItemRow.classList.add("show");
        }else{
          getTheaterItemRow.classList.remove("show");
        }
      }
      return (
        <div className="theaterItem__row" onClick={handleShowTimeMovie}>
          <div
            className="theaterItem__movie"
            aria-controls={item.maPhim}
            aria-expanded={open}
          >
            <img src={item.hinhAnh} />
            <div className="theaterItem__movieSpan">
              <span className="cinema__movie">
                <span className="btnCinema">C13</span>
                {item.tenPhim}
              </span>
              <span className="movie__span">100 phút - TIX 8.7 - IMDb 7.4</span>
            </div>
          </div>
          <Collapse in={!open}>
            <div className="theater__2D" id={item.maPhim}>
              <div className="theaterItem__header">2D Digital</div>
              <div className="theater__sessionsContainer">
                {renderBtn(item.lstLichChieuTheoPhim, item.maPhim)}
              </div>
            </div>
          </Collapse>
        </div>
      );
    });
  };
  return <>{renderItem()}</>;
}
