import React from 'react';
import Slider  from "react-slick";
export default function MobileApp() {
    const appMobile = {
        dots: false,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        arrows: false,
        swipe: true,
        swipeToSlide: true,
        className: "mobileApp__carousel",
      };
    return (
        <section className="MobileApp" id="MobileApp" name="mobileApp">
           <div className="row">
               <div className="col-sm-12 block" id="AppHome">
                   <div className="AppmaxWith">
                       <div className="row">
                           <div className="col-12 col-lg-6 left">
                               <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                               <p className="textLeft">người yêu điện ảnh</p>
                               <br />
                               <p className="textSmallLeft">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                               <br />
                               <button className="buttonLeft">App miễn phí - Tải về ngay!</button>
                               <p className="textAppUnder">TIX có hai phiên bản   
                               <a className="taga"> IOS</a> &  <a className="taga">Android </a></p> 
                           </div>
                           <div className="col-12 col-lg-6 right">
                                <img className ="img-responsive phone-img" src={require("./../../Asset/img/MobileApp/mobile.png").default}/>
                                <div className="App__img">
                                 <Slider {...appMobile} >
                                    <img className="img__mobile" src={require("./../../Asset/img/MobileApp/slide1.jpg").default}/>
                                    <img className="img__mobile" src={require("./../../Asset/img/MobileApp/slide2.jpg").default}/>
                                    <img className="img__mobile" src={require("./../../Asset/img/MobileApp/slide3.jpg").default}/>
                                    <img className="img__mobile" src={require("./../../Asset/img/MobileApp/slide4.jpg").default}/>
                                    <img className="img__mobile" src={require("./../../Asset/img/MobileApp/slide5.jpg").default}/>
                                    <img className="img__mobile" src={require("./../../Asset/img/MobileApp/slide6.jpg").default}/>
                                    <img className="img__mobile" src={require("./../../Asset/img/MobileApp/slide7.jpg").default}/>
                                    <img className="img__mobile" src={require("./../../Asset/img/MobileApp/slide8.jpg").default}/>
                                 </Slider>
                                </div>  
                                
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </section>
    )
}