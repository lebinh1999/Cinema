import React from 'react';

export default function DeleteMovie(){
        return (
                <>
                    {/* Modal */}
                    <div className="modal fade" id="modalDeleteMovie" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal__dialog" role="document">
                            <div className="modal-content modalAddMovie__content">
                                <div className="modal-header modalAddMovie__header">
                                    <span className="modalAddMovie__headerText">Xoá phim</span>
                                </div>
                                <div className="modal-body modalAddMovie__body">
                                    Xoá Thành Công!
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        )
}

