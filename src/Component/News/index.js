import React from 'react';
import NewsItem from './NewsItem';
export default function News() {
    return (
        <section className="container news" id="news" name="news">
            <ul className="nav nav-tabs news__tab" id="myNews" role="tablist">
                <li className="nav-item news__item" role="presentation">
                    <a className="nav-link news__link active" id="home-tab" data-toggle="tab" href="#news__24h" role="tab" aria-controls="news__24h" aria-selected="true">Điện ảnh 24h</a>
                </li>
                <li className="nav-item news__item" role="presentation">
                    <a className="nav-link news__link" id="profile-tab" data-toggle="tab" href="#news__review" role="tab" aria-controls="news__review" aria-selected="false">Review</a>
                </li>
                <li className="nav-item news__item" role="presentation">
                    <a className="nav-link news__link" id="contact-tab" data-toggle="tab" href="#news__discountEvent" role="tab" aria-controls="news__discountEvent" aria-selected="false">Khuyến mãi</a>
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="news__24h" role="tabpanel" aria-labelledby="news__24h">
                    <NewsItem/>
                    <div className="newsBtn">
                        <button className="btn__views">Xem thêm</button>
                    </div>
                </div>
                <div className="tab-pane fade" id="news__review" role="tabpanel" aria-labelledby="news__review">
                    <NewsItem/>
                    <div className="newsBtn">
                        <button className="btn__views">Xem thêm</button>
                    </div>
                </div>
                <div className="tab-pane fade" id="news__discountEvent" role="tabpanel" aria-labelledby="news__discountEvent">
                    <NewsItem/>
                    <div className="newsBtn">
                        <button className="btn__views">Xem thêm</button>
                    </div>
                </div>
            </div>
        </section>
    )
}