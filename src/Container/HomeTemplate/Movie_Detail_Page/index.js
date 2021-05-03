import React,{useEffect} from 'react';
import {actDetailMovieApi} from "./modules/action";
import {connect} from "react-redux";
import DetailTabPane from "./../../../Component/DetailTabPane";
import MovieInfo from "./../../../Component/MovieInfo";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
import SecondCarousel from "./../../../Asset/img/play-button.png";

function MovieDetail(props) {
    useEffect(() => {
        const id = props.match.params.id;
        props.fetchDetailMovie(id);
    }, [])
    const {data} = props;
    return (
      <section className="detail__section">
          <div className="detail__movie__container">
              <div className="detail__movie__img">
                <div className="detail__movie__gradient"></div>
                <img className="img-fluid" src={data && data.hinhAnh} alt=""/>
                <Popup trigger={<div className="detail__playTrailer"><img src={SecondCarousel}/></div>} position="center" className="detail__popup">
                  <div><iframe className="detail__popup__video" src={data && data.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </Popup>
              </div>
              <div className="detail__movie__textArea">
                <div className="detail__movie__date">02.04.2021</div>
                  <span className="detail__movie__info">
                      <span className="detail__movie__ageType">C18</span>
                      <span className="detail__movie__name">{data && data.tenPhim}</span>
                  </span>
                  <div className="detail__movie__time">130 phút - 8.1 IMDB - 2D/Digital</div>
                  <Link to="myTabContent" spy={true} duration={500}>
                    <button className="btn btn-secondary buyTicket__btn">Mua Vé</button>
                  </Link>
              </div>
          </div>
          <div className="detailPage__tab__container">
            <ul className="nav nav-tabs detailPage__tab" id="detailTab" role="tablist">
                  <li className="nav-item detailPage__tab__item" role="presentation">
                      <a className="nav-link detailPage__tab__link active" id="home-tab" data-toggle="tab" href="#detailTabPane" role="tab" aria-controls="detailTabPane" aria-selected="true">Lịch Chiếu</a>
                  </li>
                  <li className="nav-item detailPage__tab__item" role="presentation">
                      <a className="nav-link detailPage__tab__link" id="profile-tab" data-toggle="tab" href="#movieInfo" role="tab" aria-controls="movieInfo" aria-selected="false">Thông Tin</a>
                  </li>
            </ul>
            <div className="tab-content detailPage__tab__content" id="myTabContent">
              <div className="tab-pane fade show active" id="detailTabPane" role="tabpanel" aria-labelledby="detailTabPane">
                <DetailTabPane id = {data&&data.maPhim}/>
              </div>
              <div className="tab-pane fade" id="movieInfo" role="tabpanel" aria-labelledby="movieInfo">
                <MovieInfo maPhimInfo = {data&&data.moTa}/>
              </div>
            </div>
          </div>
      </section>
    )
}

const mapStateToProps = (state) => {
    return {
    //   loading: state.detailMovieReducer.loading,
      data: state.detailMovieReducer.data,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchDetailMovie: (id) => {
        dispatch(actDetailMovieApi(id));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
