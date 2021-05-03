import React,{useState} from 'react';
import Collapse from "react-bootstrap/Collapse";
import DetailTabPaneItemShowTime from '../DetailTabPaneItemShowTime';


function DetailTabPaneItem(props) {
    const [showTime, setShowTime] = useState({indexShow: 0})
    const [openDetailCollapse, setOpenDetailCollapse] = useState(false);

    const { data } = props;
    //render DetailTab Pane Theater
    const renderTheaterItem = ()=> {
        return (data && data.map((item,index)=>{
            const handleShowTimeMovie = () => {
                const getTabPaneItem = document.getElementById(item.maCumRap);
                if(!(getTabPaneItem&&getTabPaneItem.classList.contains("show"))){
                    getTabPaneItem.classList.add("show");
                }else{
                    getTabPaneItem.classList.remove("show");
                }
            }
            return (
                <div className="col-lg-12 tabPaneItem__showTime" key={item.maCumRap} id={item.maCumRap + "Theater"} onClick={handleShowTimeMovie}>
                    <div className="tabPaneItem__movie" key={item.maCumRap}  id={item.maCumRap + "Cinema"} aria-controls = {item.maCumRap} aria-expanded={!openDetailCollapse} onClick ={()=>setShowTime({indexShow: index})} >
                        <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                        <div className="tabPaneItem__movieSpan">
                            <span className="tabPaneItem__cinema">
                                <span className="tabPaneItem__colorCinema">{item.tenCumRap}</span>
                            </span>
                            <span className="tabPaneItem__infoCinema">
                                {" "}
                                {item.diaChi}
                            </span>
                            <span className="tabPaneItem__infoCinema__location">
                                <a>[Bản Đồ]</a>
                            </span>
                        </div>
                    </div>
                    <Collapse in={!openDetailCollapse}>
                        {renderShowTime()}
                    </Collapse>
                </div> 
            )
        }))
        
    }

    const renderShowTime = () =>{ 
        return (
            data && (
            <div className="tabPaneItem__2D" id= {data[showTime.indexShow].maCumRap}>
                  <DetailTabPaneItemShowTime 
                  key ={data[showTime.indexShow].maCumRap} data = {data[showTime.indexShow].lichChieuPhim}
                  />  
            </div>
    
            )
        )
    }
    
    return (
        <div className="tabPaneItem__container">
            <div className="tabPaneItem__showTime__container tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-t2" role="tabpanel" aria-labelledby="v-pills-t2-tab">
                    {renderTheaterItem()}
                </div>
                <div className="tab-pane fade" id="v-pills-t3" role="tabpanel" aria-labelledby="v-pills-t3-tab">
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Cresent Mall
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
                                <div className="theaterItem__header">2D Digital</div>
                                <div className="theater__sessionsContainer">
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
                                <div className="theaterItem__header">2D Digital</div>
                                <div className="theater__sessionsContainer">
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
                                <div className="theaterItem__header">2D Digital</div>
                                <div className="theater__sessionsContainer">
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-t4" role="tabpanel" aria-labelledby="v-pills-t4-tab">
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Phạm Hùng
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
                                <div className="theaterItem__header">2D Digital</div>
                                <div className="theater__sessionsContainer">
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
                                <div className="theaterItem__header">2D Digital</div>
                                <div className="theater__sessionsContainer">
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
                                <div className="theaterItem__header">2D Digital</div>
                                <div className="theater__sessionsContainer">
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-t5" role="tabpanel" aria-labelledby="v-pills-t5-tab">
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Vincom Thảo Điền
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
                                <div className="theaterItem__header">2D Digital</div>
                                <div className="theater__sessionsContainer">
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
                                <div className="theaterItem__header">2D Digital</div>
                                <div className="theater__sessionsContainer">
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
                                <div className="theaterItem__header">2D Digital</div>
                                <div className="theater__sessionsContainer">
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default DetailTabPaneItem;