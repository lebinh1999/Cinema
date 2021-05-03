import React, { useState, useEffect } from "react";
import TheaterItem from "../TheaterItem";
import { useSelector, useDispatch } from "react-redux";
import { actListCinemaApi, actListTheaterApi } from "./modules/action";
import { Link } from "react-router-dom";
import ShowTimes from "../ShowTimes";

export default function Theater(props) {
  const [open, setOpen] = useState(false);
  const [cinema, setcinema] = useState({ indexCinema: 0 });
  const dispatch = useDispatch();

  let { data } = useSelector((state) => state.ListCinemaReducer);

  const fetchListCinema = () => {
    dispatch(actListCinemaApi());
  };
  useEffect(() => {
    fetchListCinema();
    return () => {};
  }, []);
  const renderListCinema = () => {
    return (data && data.map((item, index) => {
        if (index == 0) {
          return (
            <a key={item.biDanh} className="nav-link theater__icon__link active" id={item.maHeThongRap} data-toggle="pill" href={"#" + item.biDanh} role="tab" aria-controls={item.maHeThongRap} onClick={() => {setcinema({ indexCinema: index });}} aria-selected="true">
              <img src={item.logo} className="theater__icon" />
            </a>
          );
        } else {
          return (
            <a key={item.biDanh} className="nav-link theater__icon__link" id={item.maHeThongRap} data-toggle="pill" href={"#" + item.biDanh} role="tab" aria-controls={item.maHeThongRap} onClick={() => {setcinema({ indexCinema: index });}} aria-selected="false">
              <img src={item.logo} className="theater__icon" />
            </a>
          );
        }
      })
    );
  };  
  const renderListCinemaSystem = () => {
    return (
      data && (
        <div
          className="tab-pane fade show active"
          id={data[cinema.indexCinema].biDanh}
          role="tabpanel"
          aria-labelledby={data[cinema.indexCinema].maHeThongRap}
        >
          <TheaterItem
            key={data[cinema.indexCinema].biDanh}
            cinema={data[cinema.indexCinema].maHeThongRap}
          />
        </div>
      )
    );
  };
  return (
    <section className="theater" name="theater" id="theater">
      <div className="theater__container">
        <div className="theater__box">
          <div className="nav flex-column nav-pills col-lg-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {renderListCinema()}
          </div>
        <div className="col-md-10  tab-content " id="v-pills-tabContent">
          {renderListCinemaSystem()}
        </div>
      </div>
      </div>
    </section>
  );
}
