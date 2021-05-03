import React from 'react';

export default function Footer() {
    return (
       <footer className="footer" >
           <div className="col-sm-12 block" id="footer">
                <div className="mainFooter">
                   <div className="row">
                        <div className="col-xs-12 col-lg-4">
                            <p className="footer__title hideOnMobile">Tix</p>
                            <div className="footer__service">
                                <div className="col-sm-6 noPaddingLeft fontSizeP hideOnMobile">
                                    <a href="#">FAQ</a>
                                    <a>Brand Guidelines</a>
                                </div>
                                <div className="col-12 col-lg-6 noPaddingLeft fontSizeP flexOnMobile">
                                    <a>Thỏa thuận sử dụng</a>
                                    <a>Chính sách bảo mật</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-4 hideOnMobile">
                            <p className="footer__title">ĐỐI TÁC</p>
                            <div className="row col-sm-12 col-xs-12 linePartner">
                                <a target="_blank" href="https://www.galaxycine.vn/" title="CGV"><img className="iconConnect" src={require("./../../Asset/img/footer/cgv.png").default} style={{backgroundColor: 'white'}} title="CGV" /></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="BHD"><img className="iconConnect" src={require("./../../Asset/img/footer/bhd.png").default}/></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/galaxycine.png").default}/></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/cinestar.png").default} title="CGV" /></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" title="CGV" /></a>
                            </div>
                            <div className="row col-sm-12 col-xs-12 linePartner">
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/megags.png").default} title="CGV" /></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/bt.jpg").default} title="CGV" /></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/dongdacinema.png").default} title="CGV" /></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/TOUCH.png").default} title="CGV" /></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/cnx.jpg").default} title="CGV" /></a>
                            </div>
                            <div className="row col-sm-12 col-xs-12 linePartner">
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/STARLIGHT.png").default} title="CGV" /></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/dcine.png").default} title="CGV" /></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/zalopay_icon.png").default} title="CGV" /></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/payoo.jpg").default} title="CGV" /></a>
                                <a target="_blank" href="https://www.galaxycine.vn/" title="Galaxy"><img className="iconConnect" src={require("./../../Asset/img/footer/VCB.png").default} title="CGV" /></a>
                            </div>
                            <div className="row col-sm-12 col-xs-12 linePartner">
                                <a><img className="iconConnect" src={require("./../../Asset/img/footer/AGRIBANK.png").default} title="CGV" /></a>
                                <a><img className="iconConnect" src={require("./../../Asset/img/footer/VIETTINBANK.png").default} title="CGV" /></a>
                                <a><img className="iconConnect" src={require("./../../Asset/img/footer/IVB.png").default} title="CGV" /></a>
                                <a><img className="iconConnect" src={require("./../../Asset/img/footer/123go.png").default} title="CGV" /></a>
                                <a><img className="iconConnect" src={require("./../../Asset/img/footer/laban.png").default} title="CGV" /></a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-4">
                            <div className="row">
                            <div className="col-xs-6 hideOnMobile textCenter mr-5">
                                <p className="footer__title pl-0">MOBILE APP</p>
                                <a><img className="iconApp" src={require("./../../Asset/img/footer/apple-logo.png").default} title="Apple App"/></a>
                                <a><img className="iconApp" src={require("./../../Asset/img/footer/android-logo.png").default} title="Android App"/></a>
                            </div>
                            <div className="col-xs-6 textCenter centerOnMobile">
                                <p className="footer__title hideOnMobile">SOCIAL</p>
                                <a><img className="iconApp" src={require("./../../Asset/img/footer/facebook-logo.png").default} title="Facebook social"/></a>
                                <a><img className="iconApp" src={require("./../../Asset/img/footer/zalo-logo.png").default} title="Zalo social"/></a>
                            </div>
                            </div>
                        </div>
                   </div>
                   <hr className="hrFooter" />
                   <div className="row company__info">
                        <div className="col-sm-12 col-lg-1 imgFooter">
                            <img className="vngIcon" src={require("./../../Asset/img/footer/zion-logo.jpg").default} style={{borderRadius:"8px"}} />
                        </div>
                        <div className="col-sm-12 col-lg-9 infoFooter">
                            <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                            <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                            <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                                <br />
                                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020  do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                            </span>
                            <span>Số Điện Thoại (Hotline): 1900 545 436 <br /> Email: <a href="mailto:support@tix.vn" style={{color: "#FB4226"}}>support@tix.vn</a>
                            </span>
                        </div>
                        <div className="col-sm-12 col-lg-2 imgFooter">
                            <a target="_blank" href="http://online.gov.vn/Home/WebDetails/62782"><img className="imgBoCo" alt="Bộ công thương" src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" /></a>
                        </div>
                   </div>
                </div>
           </div>
       </footer>
    )
}