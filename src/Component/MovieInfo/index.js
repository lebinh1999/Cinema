import React from 'react'
import { useParams } from 'react-router';

function MovieInfo(props) {
    const {maPhimInfo} = props;
    return (
        <div className="movieInfo__container">
            <div className="movieInfo__left col-sm-12 col-md-6">
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Ngày Công Chiếu</p>
                    <p className="movieInfo__left__content col-lg-8">26.03.2021</p>
                </div>
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Đạo Diễn</p>
                    <p className="movieInfo__left__content col-lg-8">Adam Wingard</p>
                </div>
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Diễn viên</p>
                    <p className="movieInfo__left__content col-lg-8">Kyle Chandler, Rebecca Hall, Eiza González, Millie Bobby Brown</p>
                </div>
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Thể Loại</p>
                    <p className="movieInfo__left__content col-lg-8">hành động, giả tưởng, ly kỳ, thần thoại</p>
                </div>
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Định dạng</p>
                    <p className="movieInfo__left__content col-lg-8">2D/Digital</p>
                </div>
                <div className="row movieInfo__left__row">
                    <p className="movieInfo__left__title col-lg-4">Quốc Gia SX</p>
                </div>
            </div>
            <div className="movieInfo__right col-lg-6">
                <div className="movieInfo__right__title">Nội Dung</div>
                <div className="movieInfo__right__content">
                    {maPhimInfo&&maPhimInfo}
                </div>
            </div>
        </div>
    )
}
export default MovieInfo;
