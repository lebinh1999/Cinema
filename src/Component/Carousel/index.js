import React from "react";
import { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {CarouselPrevArrow,CarouselNextArrow} from "./../Arrow";
import SecondCarousel from "./../../Asset/img/play-button.png";
import Popup from 'reactjs-popup';

function Carousel(){
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        speed: 500,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        nextArrow: <CarouselNextArrow/>,
        prevArrow: <CarouselPrevArrow/>,
        className: "carousel",
        responsive: [
            {
                breakpoint: 240,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <section className="carousel__container">
            <Slider  {...settings}>
                <div className="carousel__slide"><img src={require("./../../Asset/Carousel__img/an-quy.png").default} alt="FirstCarousel"/>
                    <Popup trigger={<div className="playTrailer"><img src={SecondCarousel}/></div>} position="center" className="carousel__popup">
                        <div><iframe className="carousel__popup__video" src="https://www.youtube.com/embed/98W8bv_8Kz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </Popup>
                </div>
                <div className="carousel__slide"><img src={require("./../../Asset/Carousel__img/nguoi-nhan-ban-seobok.png").default} alt="FirstCarousel"/>
                    <Popup trigger={<div className="playTrailer"><img src={SecondCarousel}/></div>} position="center" className="carousel__popup">
                        <div><iframe className="carousel__popup__video" src="https://youtu.be/eFf0nos163o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </Popup>
                </div>
                <div className="carousel__slide"><img src={require("./../../Asset/Carousel__img/ban-tay-diet-quy.jpg").default} alt="FirstCarousel"/>
                    <Popup trigger={<div className="playTrailer"><img src={SecondCarousel}/></div>} position="center" className="carousel__popup">
                        <div><iframe className="carousel__popup__video" src="https://youtu.be/uqJ9u7GSaYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </Popup>
                </div>
                <div className="carousel__slide"><img src={require("./../../Asset/Carousel__img/lat-mat-48h.png").default} alt="FirstCarousel"/>
                    <Popup trigger={<div className="playTrailer"><img src={SecondCarousel}/></div>} position="center" className="carousel__popup">
                        <div><iframe className="carousel__popup__video" src="https://youtu.be/kBY2k3G6LsM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </Popup>
                </div>
                <div className="carousel__slide"><img src={require("./../../Asset/Carousel__img/mortal-kombat.png").default} alt="FirstCarousel"/>
                    <Popup trigger={<div className="playTrailer"><img src={SecondCarousel}/></div>} position="center" className="carousel__popup">
                        <div><iframe className="carousel__popup__video" src="https://youtu.be/Eu9G8nO5-Ug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </Popup>
                </div>
            </Slider>
        </section>
    );
  }

export default memo(Carousel);

