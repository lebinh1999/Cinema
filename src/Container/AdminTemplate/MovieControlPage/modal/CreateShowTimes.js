import React from 'react'

export default function CreateShowTimesModal() {
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="modalCreateShowTimes" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal__dialog" role="document">
                    <div className="modal-content modalCreateShowTimes__content">
                        <div className="modal-header modalAdmin__header">
                            <span className="modalAdmin__headerText">tạo lịch chiếu phim</span>
                        </div>
                        <div className="modal-body modalAdmin__body">
                            <div className="form-group">
                                <label className="form__label">Mã Phim:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="form__label">Ngày Chiếu Giờ Chiếu:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="form__label">Mã Rạp:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="form__label">Giá:</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
