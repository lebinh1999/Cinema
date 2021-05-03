import React, { useState, useEffect, memo } from "react";
import { actListTheaterApi } from "./modules/action";
import { connect } from "react-redux";
import ShowTimes from "../ShowTimes";
import { Scrollbars } from 'react-custom-scrollbars';

function TheaterItem(props) {
  
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(null);
  const [showTime, setShowTime] = useState({ indexShow: 0 });

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgba(35, 49, 86, 0.8)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  const CustomScrollbars = props => (
    <Scrollbars
      renderThumbVertical={renderThumb}
      {...props}
    />
  );


  useEffect(() => {
    const id = props.cinema;
    props.fetchListTheater(id);
   
  }, []);

  const renderTheaterItem = () => {
    const { data } = props;
      return (data && data.map((item, index)=> {

        const handleClick = (e) => {
          setShowTime({indexShow: index})
          const otherTheater = document.getElementsByClassName(
            "theaterItem__content active"
          )[0];
          const chosenTheater = document.getElementById(e.target.id);
          const theater = e.target.id;
          setActive(theater);
          otherTheater.classList.remove("active");
          if (theater) {
            chosenTheater.classList.add("active");
          }
        };

        if(index===0){
          return (
            <div key={item.maCumRap} className="theaterItem__content active" id={ "cinema" + item.maCumRap} data-toggle="pill" role= "tab" aria-controls="home" href={"#Cinema" + item.maCumRap} aria-controls = {item.maCumRap} onClick={handleClick} aria-selected="true">
              <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
              <div className="theaterItem__span">
                <span className="cinema">
                  <span className="colorCinema">{item.tenCumRap}</span>
                </span>
                <span className="infoCinema">{item.diaChi}</span>
                <span className="infoCinema__Detail">
                  <a>[chi tiết]</a>
                </span>
              </div>
            </div>
          );
        }else{
          return (
            <div key={item.maCumRap} className="theaterItem__content" id={ "cinema" + item.maCumRap} data-toggle="pill" role= "tab" aria-controls="home" href={"#Cinema" + item.maCumRap} aria-controls = {item.maCumRap} onClick={handleClick} aria-selected="false">
              <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
              <div className="theaterItem__span">
                <span className="cinema">
                  <span className="colorCinema">{item.tenCumRap}</span>
                </span>
                <span className="infoCinema">{item.diaChi}</span>
                <span className="infoCinema__Detail">
                  <a>[chi tiết]</a>
                </span>
              </div>
            </div>
          );
        }
        })
      )};
  const renderShowTime = () => {
    const { data } = props;   
      return (
        data && (
          <div
           className = "show active"
          id= { "Cinema" + data[showTime.indexShow].maCumRap}
          role="tabpanel"
          aria-labelledby = {"cinema" + data[showTime.indexShow].maCumRap}
        >
            <ShowTimes key = {data[showTime.indexShow].biDanh} maCumRap = {data[showTime.indexShow].maCumRap} 
            danhSachRap = {data[showTime.indexShow].danhSachRap} nameCinema = {props.cinema} />  
            </div>
        )
        )
  };

  return (
    <div className="row theater__item">
      <div className="col-lg-4 theaterItem__column">
        {renderTheaterItem()}
      </div>
      
      <div className="col-lg-8 theater__wrapMovie">
      <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
            {renderShowTime()}
            </CustomScrollbars>
        </div>
        
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.ListTheaterReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListTheater: (id) => {
      dispatch(actListTheaterApi(id));
    },
  };
};

export default memo(connect(mapStateToProps, mapDispatchToProps)(TheaterItem));
