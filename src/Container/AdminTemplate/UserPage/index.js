import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import {actFetchAdminUser, DeleteUser} from "./modules/action";
import { connect, useDispatch } from "react-redux";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import AddUser from "./modal/AddUser/AddUser";

function UserPage(props) {
    const [pageCount, setPageCount] = useState(52);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        props.fetchAdminUserList(currentPage);
    }, [currentPage])


    let dispatch = useDispatch();

    const delUser = (taikhoan)=>{
        dispatch(DeleteUser(taikhoan))
    }
    let FormModal = AddUser;

    // function handling page change
    const handlePageChange = (selectedObject) => {
		setCurrentPage(selectedObject.selected);
		props.fetchAdminUserList(currentPage);
	};
    const {data} = props;
    const renderAdminUser = () => {
        return(data&&data.items.map((item) => {
            return(
                <div className="row userControl__item__container p-0 col-lg-12" key={item.taiKhoan}>
                    <div className="col-lg-1 p-0 userControl__item">               
                        <div className="userControl__content userId">{item.taiKhoan}</div>
                    </div>
                    <div className="col-lg-1 p-0 userControl__item">                    
                        <div className="userControl__content userName">{item.matKhau}</div>
                    </div>
                    <div className="col-lg-3 p-0 userControl__item">                    
                        <div className="userControl__content userEmail">
                            {item.email}
                        </div>
                    </div>
                    <div className="col-lg-1 p-0 userControl__item">          
                        <div className="userControl__content userPhone">
                        {item.soDt}
                        </div>
                    </div>
                    <div className="col-lg-1 p-0 userControl__item">                    
                        <div className="userControl__content userGroup">{item.maNhom}</div>
                    </div>
                    <div className="col-lg-1 p-0 userControl__item">                    
                        <div className="userControl__content userGroup">{item.maLoaiNguoiDung}</div>
                    </div>
                    <div className="col-lg-2 p-0 userControl__item">                    
                        <div className="userControl__content userDayPremiere">{item.hoTen}</div>
                    </div>
                    <div className="col-lg-2 p-0 userControl__item">
                        <div className="userControl__content userServices">
                            <button className="btn btn-success adminBtn updateUser" data-toggle="modal" data-target="#myModal">Sửa</button>
                            <button className="btn btn-danger adminBtn deleteUser" id={item.taiKhoan} onClick={()=>{delUser(item.taiKhoan)}}>Xoá</button>
                        </div>
                    </div>
                </div>
            )
        }))
    }
    return (
        <div className="userControl">
            <div className="admin__title">Danh Sách Người Dùng</div>
            <div className="btn btn-primary admin__service" data-toggle="modal" data-target="#modalAddUser">Thêm Người Dùng</div>
            <div className="userControl__container p-0 col-lg-12">
                <div className="row userControl__title__container p-0 col-lg-12">
                    <div className="col-lg-1 userControl__title">
                        <div className="userControl__title__content text-primary">Tài Khoản</div>
                    </div>
                    <div className="col-lg-1 userControl__title">
                        <div className="userControl__title__content text-primary">Mật Khẩu</div>
                    </div>
                    <div className="col-lg-3 userControl__title">
                        <div className="userControl__title__content text-primary">Email</div>                        
                    </div>
                    <div className="col-lg-1 userControl__title">
                        <div className="userControl__title__content text-primary">Số Điện Thoại</div>                        
                    </div>
                    <div className="col-lg-1 userControl__title">
                        <div className="userControl__title__content text-primary">Mã Nhóm</div>                        
                    </div>
                    <div className="col-lg-1 userControl__title">
                        <div className="userControl__title__content text-primary">Mã Loại Người Dùng</div>                        
                    </div>
                    <div className="col-lg-2 userControl__title">
                        <div className="userControl__title__content text-primary">Họ Tên</div>                        
                    </div>
                    <div className="col-lg-2 userControl__title">
                        <div className="userControl__title__content text-primary">
                            <FontAwesomeIcon icon={faCog} className="userControl__titleIcon"/>
                        </div>                        
                    </div>
                </div>
                {renderAdminUser()}
                <ReactPaginate pageCount={pageCount} pageRange={2} marginPagesDisplayed={2} onPageChange={handlePageChange} containerClassName={'movieControl__containerPagination'} previousLinkClassName={'pageNavigation'} nextLinkClassName={'pageNavigation'} breakClassName={'page'} pageLinkClassName={'pageBtn'} pageClassName={'page'} disabledClassNae={'pageDisabled'} activeClassName={'pageActive'}/>
            </div>
            <FormModal/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        data: state.listUserAdminReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAdminUserList: (currentPage) => {
        dispatch(actFetchAdminUser(currentPage));
      },
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(UserPage);
