import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState, useEffect} from 'react';
import DetailTabPaneDate from "./../DetailTabPaneDate";
import DetailTabPaneItem from "./../DetailTabPaneItem";
import DetailTabPaneItemMobile from "./../DetailTabPaneItemMobile";
import {connect} from "react-redux";
import { actFetchTheaterDetailTabItemApi } from './modules/action';

function DetailTabPane(props) {
  const [cinema, setCinema] = useState({ indexCinema: 0 });
  const {id} = props;
  useEffect(() => {
    props.fetchListCinema(id);
  }, [id])

  const {data} = props;
  // render logo cinema desktop
  const renderListCinemaDesktop = () => {
    return(data&&data.heThongRapChieu.map((item,index)=>{
      if(index===0){
        return(
          <div key ={item.maHeThongRap} className="nav-link detailTab__link active" id={item.maHeThongRap} data-toggle="pill" href={"#" + item.maHeThongRap} role="tab" aria-controls={item.maHeThongRap} onClick={()=>{setCinema({indexCinema: index})}} aria-selected="false">
            <img src={item.logo} alt="" className="detailTab__icon"/>
            <span className="detailTab__theaterName">{item.tenHeThongRap}</span>
          </div>
        )
      }else{
        return(
          <div key ={item.maHeThongRap} className="nav-link detailTab__link" id={item.maHeThongRap} data-toggle="pill" href={"#" + item.maHeThongRap} role="tab" aria-controls={item.maHeThongRap} onClick={()=>{setCinema({indexCinema: index})}} aria-selected="false">
            <img src={item.logo} alt="" className="detailTab__icon"/>
            <span className="detailTab__theaterName">{item.tenHeThongRap}</span>
          </div>
        )
      }
    }))
  }

  // render list theater of cinema
  const renderListCinemaSystemDesktop =()=>{
    return (
      data && (
        <div  className="tab-pane fade show active" id={data&&data.heThongRapChieu[cinema.indexCinema].maHeThongRap} role="tabpanel" aria-labelledby={data&&data.heThongRapChieu[cinema.indexCinema].maHeThongRap}>
        <DetailTabPaneDate/>
        <DetailTabPaneItem  key={data&&data.heThongRapChieu[cinema.indexCinema].maHeThongRap}  cinemaDesktop = {data&&data.heThongRapChieu[cinema.indexCinema].maHeThongRap} id={data&&data.maPhim} data={data&&data.heThongRapChieu[cinema.indexCinema].cumRapChieu} />
      </div>
      )
    )
  }

    // render logo mobile 
    const renderListCinemaMobile = () =>{
      return (data && data.heThongRapChieu.map((item)=>{
        return (
          <div className="nav__link__container" key ={item.maHeThongRap}>
            <div className="nav-link detailTab__linkMobile dropdown-toggle dropdown__toggle" id={item.maHeThongRap} aria-controls={item.maHeThongRap} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={item.logo} alt="" className="detailTab__iconMobile"/>
              <span className="detailTab__theaterNameMobile">{item.tenHeThongRap}</span>
              <FontAwesomeIcon icon={faChevronRight} className="icon__right"/>
            </div>
            {/* {renderListCinemaSystemMobile()} */}
            <div className="dropdown-menu dropdown__menu" href={"#" + item.maHeThongRap} id ={item.maHeThongRap} aria-labelledby={item.maHeThongRap}>
              <a className="dropdown-item dropdown__item">
                <DetailTabPaneItemMobile key={item.maHeThongRap}  id={item.maPhim} data={item.cumRapChieu} />
              </a>
            </div>
          </div>
        )
      }))
    }
  
    return (
        <section className="detail__tab" name="detail__tab">
          <div className="detailTab__container">
            <div className="detailTab__box">
              {/* Desktop Design */}
              <div className="nav flex-column nav-pills col-12 col-lg-3 detailTab__pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {renderListCinemaDesktop()}
              </div>
              <div className=" col-lg-9 tab-content detailTab__content" id="v-pills-tabContent">
                {renderListCinemaSystemDesktop()}
              </div>

              {/* Mobile Design */}
              <div className="col-12 detailTab__pillsMobile">
                <div className="tab-content" id="v-pills-tabContentMobile">
                    <DetailTabPaneDate/>
                </div>
                  <div className="dropdown">
                    {renderListCinemaMobile()}
                  </div>
              </div>
            </div>
          </div>
      </section>
    )
}
const mapStateToProps = (state) =>{
    return {
      data: state.listTheaterDetailTabItemReducer.data,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      fetchListCinema: (id)=>{
        dispatch(actFetchTheaterDetailTabItemApi(id))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailTabPane);