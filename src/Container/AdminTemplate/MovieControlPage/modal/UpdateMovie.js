import React from 'react';

function UpdateMovieModal() {
    return (
        <>
        {/* Modal */}
        <div className="modal fade" id="modalUpdateMovie" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog modal__dialog" role="document">
                <div className="modal-content modalAddMovie__content">
                    <div className="modal-header modalAddMovie__header">
                        <span className="modalAddMovie__headerText">Cập nhật phim</span>
                    </div>
                    <div className="modal-body modalAddMovie__body">
                        <form>
                            <div className="form-group">
                                <label className="form__label">Mã Phim:</label>
                                <input name="maPhim" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="form__label">Tên Phim:</label>
                                <input name="tenPhim" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="form__label">Trailer:</label>
                                <input name="trailer" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="form__label">Hình Ảnh:</label>
                                <input name="hinhAnh" type="file" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="form__label">Mô Tả:</label>
                                <input name="moTa" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="form__label">Mã Nhóm:</label>
                                <input name="maNhom" defaultValue="GP11" type="text" className="form-control"/>
                            </div>
                            <button type="submit" className="form-control">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default UpdateMovieModal