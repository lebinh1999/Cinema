import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,faPlayCircle, faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoviePrevArrow, MovieNextArrow } from "./../Arrow";
import { actListMovieApiNowShowing } from "./modules/action";
import { connect } from "react-redux";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function MovieItemNS(props) {
  useEffect(() => {
    props.fetchListMovieNS();
  }, []);
  const renderHTMLNS = () => {
    const { data } = props;
    return (data&&data.map((item) => {
      return (
        <div className="movie__card" key={item.maPhim}>
          <div className="movie__img">
            <div className="movie-gradient"></div>
            <div className="movie__age">C18</div>
            <div className="movie__overlay movie-hover">
              <div className="movie__trailer">
                <Popup trigger={<Link><FontAwesomeIcon icon={faPlayCircle} className="trailer__icon"/></Link>} position="center" className="movie__popup">
                  <div><iframe className="movie__popup__video" src={item.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </Popup>
                <div className="movie__service">Trailer</div>
              </div>
              <div className="movie__buyTicket">
                <Link to={`/detail/${item.maPhim}`}><FontAwesomeIcon icon={faTicketAlt} className="buyTicket__icon"/></Link>
                <div className="movie__service">Mua Vé</div>
              </div>
              <div className="movie__detail">
                <Link to={`/detail/${item.maPhim}`}><FontAwesomeIcon icon={faInfoCircle} className="detail__icon"/></Link>
                <div className="movie__service">Chi Tiết</div>
              </div>
            </div>
            <img src={item.hinhAnh} alt="test" className="img-fluid"/>
          </div>
          <div className="movieInfo__container">
            <div className="movieInfo__row">
              <div className="movie__name">
                <Link to={`/detail/${item.maPhim}`}><p>{item.tenPhim}</p></Link>
              </div>
            </div>
          </div>
        </div>
      )
    }))
  }
  const settings = {
    className: "slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 300,
    dots: false,
    autoplay: false,
    prevArrow: <MoviePrevArrow />,
    nextArrow: <MovieNextArrow />,
    autoplaySpeed: 10000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          draggable: false,
          focusOnSelect: false,
          swipe: false,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          draggable: false,
          focusOnSelect: false,
          swipe: false,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          draggable: false,
          focusOnSelect: false,
          swipe: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          draggable: true,
          focusOnSelect: false,
          swipe: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          draggable: false,
          focusOnSelect: false,
          swipe: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          draggable: false,
          focusOnSelect: false,
          swipe: true,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          draggable: false,
          focusOnSelect: false,
          swipe: true,
        },
      },
    ],
  };
  // const { movieNS } = props;
  return (
    
  <Slider {...settings}>
    {renderHTMLNS()}
  </Slider>
  );
}
const mapStateToProps = (state) => {
  return {
    // loading: state.listMovieReducer.loading,
    data: state.listMovieReducerNS.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovieNS: () => {
      dispatch(actListMovieApiNowShowing());
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(MovieItemNS);
