import React from 'react'

export default function NewsItem() {
    return (
        <div className="newItem__header">
            <div className="row newItem__row">
                <div className="col-12 col-md-6 newItem__header__first">
                    <div className="newItem__img">
                        <a><img src={require("./../../../Asset/img/NewsIcon/lyhai.png").default}  alt=""/></a>
                    </div>
                    <a className="newItem__title" href="#"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất </p></a>
                    <p className="newItem__p">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</p>
                    <div className="newItem__Icon">
                    <div className="newItem__wrapIcon newItem__Face">
                        <img className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/like.png").default} alt=""/>
                            <p className="Icon__mount">0</p>
                    </div>
                    <div className="newItem__wrapIcon newItem__Comment">
                        <img  className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/comment.png").default} alt=""/>
                            <p className="Icon__mount">0</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 newItem__header__second">
                <div className="newItem__img">
                    <a><img src={require("./../../../Asset/img/NewsIcon/mortal-kombat.png").default} alt=""/></a>
                </div>
                <a className="newItem__title" href="#"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất </p></a>
                <p className="newItem__p">Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, 
                    Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.</p>
                    <div className="newItem__Icon">
                        <div className="newItem__wrapIcon newItem__Face">
                                <img className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/like.png").default} alt=""/>
                                <p className="Icon__mount">0</p>
                        </div>
                        <div className="newItem__wrapIcon newItem__Comment">
                                <img  className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/comment.png").default} alt=""/>
                                <p className="Icon__mount">0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row newItem__row newItem__postRow">
                <div className="col-12 col-md-4 newItem__smallPost">
                    <div className="newItem__postImg">
                        <a><img src={require("./../../../Asset/img/NewsIcon/promising-young-woman.png").default} alt=""/></a>
                    </div>
                    <a className="newItem__title" href="#"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất </p></a>
                    <p className="newItem__p">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</p>
                    <div className="newItem__Icon">
                        <div className="newItem__wrapIcon newItem__Face">
                            <img className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/like.png").default} alt=""/>
                                <p className="Icon__mount">0</p>
                        </div>
                        <div className="newItem__wrapIcon newItem__Comment">
                            <img  className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/comment.png").default} alt=""/>
                                <p className="Icon__mount">0</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 newItem__smallPost">
                    <div className="newItem__postImg">
                        <a><img src={require("./../../../Asset/img/NewsIcon/vua-dep-lai.png").default} alt=""/></a>
                    </div>
                    <a className="newItem__title" href="#"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất </p></a>
                    <p className="newItem__p">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</p>
                    <div className="newItem__Icon">
                        <div className="newItem__wrapIcon newItem__Face">
                            <img className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/like.png").default} alt=""/>
                                <p className="Icon__mount">0</p>
                        </div>
                        <div className="newItem__wrapIcon newItem__Comment">
                            <img  className="Icon_Face" src={require("./../../../Asset/img/NewsIcon/comment.png").default} alt=""/>
                                <p className="Icon__mount">0</p>
                        </div>
                    </div>
                </div>

                <div className=" col-12 col-md-4 newItem__rightPost">
                    <div className="newItem__post">
                        <div className="post__img">
                            <a><img src={require("./../../../Asset/img/NewsIcon/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon.jpg").default} alt=""/></a>
                        </div>
                        <a className="post__title"><p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p></a>
                    </div>
                    <div className="newItem__post">
                        <div className="post__img">
                            <a><img src={require("./../../../Asset/img/NewsIcon/boc-tem.png").default} alt=""/></a>
                        </div>
                        <a className="post__title"><p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p></a>
                    </div>
                    <div className="newItem__post">
                        <div className="post__img">
                            <a><img src={require("./../../../Asset/img/NewsIcon/tiec-trang-mau.png").default} alt=""/></a>
                        </div>
                        <a className="post__title"><p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p></a>
                    </div>
                    <div className="newItem__post">
                        <div className="post__img">
                            <a><img src={require("./../../../Asset/img/NewsIcon/ngo-thanh-van.jpg").default} alt=""/></a>
                        </div>
                        <a className="post__title"><p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p></a>
                    </div>
                </div>
            </div>             
        </div>        
    )
}
