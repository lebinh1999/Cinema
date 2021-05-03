import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import {actFetchAdminMovie, DeleteMovieApi} from "./modules/action";
import { connect, useDispatch } from "react-redux";
import ReactPaginate from 'react-paginate';
import CreateShowTimesModal from "./modal/CreateShowTimes";
import AddMovieModal from "./modal/AddMovie";
import UpdateMovieModal from "./modal/UpdateMovie";
import axios from "axios";

function MovieControlPage(props) {
    const [pageCount, setPageCount] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        props.fetchAdminMovieList(currentPage);
    }, [currentPage])

    let dispatch = useDispatch();

    let FormModalCreateShowTimes = CreateShowTimesModal;
    let FormModalAddMovie = AddMovieModal;
    let FormModalUpdateMovie = UpdateMovieModal;

    // function handling page change
    const handlePageChange = (selectedObject) => {
		setCurrentPage(selectedObject.selected);
		props.fetchAdminMovieList(currentPage);
	};

    const delMovie = (ma)=>{
        dispatch(DeleteMovieApi(ma))
    }
    const {data} = props;
    const renderAdminMovie = () => {
        return(data&&data.items.map((item) => {
            return(
                <div className="row movieShowControl__item__container p-0 col-lg-12" key={item.maPhim}>
                    <div className="col-lg-1 p-0 movieShowControl__item">               
                        <div className="movieShowControl__content movieId">{item.maPhim}</div>
                    </div>
                    <div className="col-lg-3 p-0 movieShowControl__item">                    
                        <div className="movieShowControl__content movieName">{item.tenPhim}</div>
                    </div>
                    <div className="col-lg-1 p-0 movieShowControl__item">                    
                        <div className="movieShowControl__content moviePic">
                            <img src={item.hinhAnh}/>
                        </div>
                    </div>
                    <div className="col-lg-1 p-0 movieShowControl__item">                    
                        <div className="movieShowControl__content movieDes">
                        {item.moTa}
                        </div>
                    </div>
                    <div className="col-lg-1 p-0 movieShowControl__item">                    
                        <div className="movieShowControl__content movieGroup">{item.maNhom}</div>
                    </div>
                    <div className="col-lg-2 p-0 movieShowControl__item">                    
                        <div className="movieShowControl__content movieDayPremiere">{item.ngayKhoiChieu.slice(0,10)}</div>
                    </div>
                    <div className="col-lg-3 p-0 movieShowControl__item">
                        <div className="movieShowControl__content movieServices">
                            <button className="btn btn-primary adminBtn createShow" data-toggle="modal" data-target="#modalCreateShowTimes">Tạo Lịch Chiếu</button>
                            <button className="btn btn-success adminBtn updateShow" data-toggle="modal" data-target="#modalUpdateMovie">Sửa</button>
                            <button className="btn btn-danger adminBtn deleteShow" id={item.maPhim} onClick={()=>{delMovie(item.maPhim)}}>Xoá</button>
                        </div>
                    </div>
                </div>
            )
        }))
    }
    return (
        <div className="movieControl">
            <div className="admin__title">Danh Sách Phim</div>
            <div className="btn btn-primary admin__service" data-toggle="modal" data-target="#modalAddMovie">Thêm Phim</div>
            <div className="movieShowControl__container p-0 col-lg-12">
                <div className="row movieShowControl__title__container p-0 col-lg-12">
                    <div className="col-lg-1 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Mã Phim</div>
                    </div>
                    <div className="col-lg-3 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Tên Phim</div>
                    </div>
                    <div className="col-lg-1 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Hình Ảnh</div>                        
                    </div>
                    <div className="col-lg-1 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Mô Tả</div>                        
                    </div>
                    <div className="col-lg-1 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Mã Nhóm</div>                        
                    </div>
                    <div className="col-lg-2 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Ngày Khởi Chiếu</div>                        
                    </div>
                    <div className="col-lg-3 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">
                            <FontAwesomeIcon icon={faCog} className="movieShowControl__titleIcon"/>
                        </div>                        
                    </div>
                </div>
                {renderAdminMovie()}
                <ReactPaginate pageCount={pageCount} pageRange={2} marginPagesDisplayed={2} onPageChange={handlePageChange} containerClassName={'movieControl__containerPagination'} previousLinkClassName={'pageNavigation'} nextLinkClassName={'pageNavigation'} breakClassName={'page'} pageLinkClassName={'pageBtn'} pageClassName={'page'} disabledClassNae={'pageDisabled'} activeClassName={'pageActive'}/>
            </div>
            <FormModalCreateShowTimes/>
            <FormModalAddMovie/>
            <FormModalUpdateMovie/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        data: state.listMovieAdminReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAdminMovieList: (currentPage) => {
        dispatch(actFetchAdminMovie(currentPage));
      },
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(MovieControlPage);
