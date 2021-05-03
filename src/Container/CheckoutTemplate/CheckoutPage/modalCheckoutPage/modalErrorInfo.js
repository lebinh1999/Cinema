import React from 'react'

export default function modalErrorInfo() {
    return(
        <>
            {/* Modal */}
            <div className="modal fade" id="modelIdInfo" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal__dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header modalError__header">
                            <img src={require("./../../../../Asset/CheckoutPage__img/post-notification.png").default}/>
                        </div>
                        <div className="modal-body modalError__body">
                            <span className="modalErrorInfo__text">
                                Vui lòng điển đầy đủ thông tin bạn nhé!
                            </span>
                        </div>
                        <div className="modal-footer modalError__footer">
                            <span type="button" className="btn btn-secondary btnOk" data-dismiss="modal">
                                OK
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
