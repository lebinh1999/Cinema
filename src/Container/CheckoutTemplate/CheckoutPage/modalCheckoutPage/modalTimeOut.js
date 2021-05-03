import React from 'react'

export default function modalTimeOut() {
    const handleRefreshPage = () => {
        window.location.reload();
    }
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="modelIdTimeOut" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal__dialog modalTimeOut__dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body modalTimeOut__body">
                            <span className="modalTimeOut__text">
                                Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút.
                            </span>
                            <span className="modalTimeOut__refresh" onClick={handleRefreshPage}>Đặt vé lại</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
