import React from "react";
// import { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CarouselArrow
function CarouselPrevArrow(props) {
  const { className, to, style, onClick } = props;
  return <button className={`${className} carousel__prev__arrow`} aria-label={to} style={{ ...style }} onClick={onClick}>Previous</button>;
}
function CarouselNextArrow(props) {
  const { className, to, style, onClick } = props;
  return <button className={`${className} carousel__next__arrow`} aria-label={to} style={{ ...style }} onClick={onClick}>Next</button>;
}
// MovieItemArrow
function MoviePrevArrow(props) {
  const { className, to, style, onClick } = props;
  return <button className={`${className} movie__prev__arrow`} aria-label={to} style={{ ...style }} onClick={onClick}>Previous</button>;
}
function MovieNextArrow(props) {
  const { className, to, style, onClick } = props;
  return <button className={`${className} movie__next__arrow`} aria-label={to} style={{ ...style }} onClick={onClick}>Next</button>;
}
export { CarouselPrevArrow, CarouselNextArrow, MoviePrevArrow, MovieNextArrow };
