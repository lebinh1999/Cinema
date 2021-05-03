import React from 'react';
import DetailTabPaneItem from "./../DetailTabPaneItem";

export default function DetailTabPaneDate() {
    return (
        <div className="tabPaneItem">
            {/* Desktop Design */}
            <div className="tabPaneItemOnDesktop">
                <div className="tabPaneItem__date__container" role="tablist" aria-orientation="vertical">
                    <div className="tabPaneItem__dateOfWeek nav nav-pills">
                        <a className="nav-link active tabPaneItem__date" id="v-pills-t2-tab" data-toggle="pill" href="#v-pills-t2" role="tab" aria-controls="v-pills-t2" aria-selected="true">
                            <p className="date__firstRow">Thứ 2</p>
                            <p className="date__secondRow">1</p>
                        </a>
                        <a className="nav-link tabPaneItem__date" id="v-pills-t3-tab" data-toggle="pill" href="#v-pills-t3" role="tab" aria-controls="v-pills-t3" aria-selected="false">
                            <p className="date__firstRow">Thứ 3</p>
                            <p className="date__secondRow">1</p>
                        </a>
                        <a className="nav-link tabPaneItem__date" id="v-pills-t4-tab" data-toggle="pill" href="#v-pills-t4" role="tab" aria-controls="v-pills-t4" aria-selected="false">
                            <p className="date__firstRow">Thứ 4</p>
                            <p className="date__secondRow">1</p>
                        </a>
                        <a className="nav-link tabPaneItem__date" id="v-pills-t5-tab" data-toggle="pill" href="#v-pills-t5" role="tab" aria-controls="v-pills-t5" aria-selected="false">
                            <p className="date__firstRow">Thứ 5</p>
                            <p className="date__secondRow">1</p>
                        </a>
                        <a className="nav-link tabPaneItem__date" id="v-pills-t6-tab" data-toggle="pill" href="#v-pills-t6" role="tab" aria-controls="v-pills-t6" aria-selected="false">
                            <p className="date__firstRow">Thứ 6</p>
                            <p className="date__secondRow">1</p>
                        </a>
                        <a className="nav-link tabPaneItem__date" id="v-pills-t7-tab" data-toggle="pill" href="#v-pills-t7" role="tab" aria-controls="v-pills-t7" aria-selected="false">
                            <p className="date__firstRow">Thứ 7</p>
                            <p className="date__secondRow">1</p>
                        </a>
                        <a className="nav-link tabPaneItem__date" id="v-pills-cn-tab" data-toggle="pill" href="#v-pills-cn" role="tab" aria-controls="v-pills-cn" aria-selected="false">
                            <p className="date__firstRow">CN</p>
                            <p className="date__secondRow">1</p>
                        </a>
                        <a className="nav-link tabPaneItem__date">
                            <p className="date__firstRow">Thứ 2</p>
                            <p className="date__secondRow">1</p>
                        </a>
                        <a className="nav-link tabPaneItem__date">
                            <p className="date__firstRow">Thứ 2</p>
                            <p className="date__secondRow">1</p>
                        </a>
                        <a className="nav-link tabPaneItem__date">
                            <p className="date__firstRow">Thứ 2</p>
                            <p className="date__secondRow">1</p>
                        </a>
                    </div>
                </div>
                {/* <DetailTabPaneItem/> */}
            </div>
            {/* Mobile Desgin */}
            <div className="tabPaneItemOnMobile">
                <div className="tabPaneItem__date__containerMobile" role="tablist" aria-orientation="vertical">
                    <div className="row tabPaneItem__dateOfWeekMobile nav nav-pills">
                        <a className="nav-link active tabPaneItem__dateMobile" id="v-pills-t2-tabMobile" data-toggle="pill" href="#v-pills-t2Mobile" role="tab" aria-controls="v-pills-t2Mobile" aria-selected="true">
                            <p className="date__firstRowMobile">T2</p>
                            <p className="date__secondRowMobile">22</p>
                        </a>
                        <a className="nav-link tabPaneItem__dateMobile" id="v-pills-t3-tabMobile" data-toggle="pill" href="#v-pills-t3Mobile" role="tab" aria-controls="v-pills-t3Mobile" aria-selected="false">
                            <p className="date__firstRowMobile">T3</p>
                            <p className="date__secondRowMobile">22</p>
                        </a>
                        <a className="nav-link tabPaneItem__dateMobile" id="v-pills-t4-tabMobile" data-toggle="pill" href="#v-pills-t4Mobile" role="tab" aria-controls="v-pills-t4Mobile" aria-selected="false">
                            <p className="date__firstRowMobile">T4</p>
                            <p className="date__secondRowMobile">22</p>
                        </a>
                        <a className="nav-link tabPaneItem__dateMobile" id="v-pills-t5-tabMobile" data-toggle="pill" href="#v-pills-t5Mobile" role="tab" aria-controls="v-pills-t5Mobile" aria-selected="false">
                            <p className="date__firstRowMobile">T5</p>
                            <p className="date__secondRowMobile">22</p>
                        </a>
                        <a className="nav-link tabPaneItem__dateMobile" id="v-pills-t6-tabMobile" data-toggle="pill" href="#v-pills-t6Mobile" role="tab" aria-controls="v-pills-t6Mobile" aria-selected="false">
                            <p className="date__firstRowMobile">T6</p>
                            <p className="date__secondRowMobile">22</p>
                        </a>
                        <a className="nav-link tabPaneItem__dateMobile" id="v-pills-t7-tabMobile" data-toggle="pill" href="#v-pills-t7Mobile" role="tab" aria-controls="v-pills-t7Mobile" aria-selected="false">
                            <p className="date__firstRowMobile">T7</p>
                            <p className="date__secondRowMobile">22</p>
                        </a>
                        <a className="nav-link tabPaneItem__dateMobile" id="v-pills-cn-tabMobile" data-toggle="pill" href="#v-pills-cnMobile" role="tab" aria-controls="v-pills-cnMobile" aria-selected="false">
                            <p className="date__firstRowMobile">CN</p>
                            <p className="date__secondRowMobile">22</p>
                        </a>
                        <a className="nav-link tabPaneItem__dateMobile">
                            <p className="date__firstRowMobile">T2</p>
                            <p className="date__secondRowMobile">22</p>
                        </a>
                        <a className="nav-link tabPaneItem__dateMobile">
                            <p className="date__firstRowMobile">T2</p>
                            <p className="date__secondRowMobile">22</p>
                        </a>
                        <a className="nav-link tabPaneItem__dateMobile">
                            <p className="date__firstRowMobile">T2</p>
                            <p className="date__secondRowMobile">22</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
