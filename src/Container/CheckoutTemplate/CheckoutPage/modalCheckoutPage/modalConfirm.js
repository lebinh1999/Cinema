import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import modalComplete from "./modalComplete";

function ModalConfirm() {
    let ModalComplete = modalComplete;
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="modelIdConfirm" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <form className="modal-dialog modal__dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header modalConfirm__header">
                            xác nhận mua vé
                        </div>
                        <div className="modal-body modalConfirm__body">
                            Bạn xác nhận hoàn tất đặt vé, bạn có muốn đặt thêm vé hay không?
                        </div>
                        <div className="modal-footer modalConfirm__footer">
                            <span type="button" className="btn btn-secondary btnConfirm -btnClose" data-dismiss="modal">
                                <FontAwesomeIcon icon={faTimesCircle} className="btnConfirm__icon"/>
                                <span className="modalBtn__text">trở lại</span>
                            </span>
                            <span type="button" className="btn btn-secondary btnConfirm -btnComplete" data-dismiss="modal" data-toggle="modal" data-target="#modelIdComplete">
                                <FontAwesomeIcon icon={faCheckCircle} className="btnConfirm__icon"/>
                                <span className="modalBtn__text">xác nhận</span>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <ModalComplete/>
        </>
    )
}

export default ModalConfirm