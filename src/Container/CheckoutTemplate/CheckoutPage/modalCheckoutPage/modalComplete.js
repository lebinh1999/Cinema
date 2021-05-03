import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function modalComplete() {
    return (
        <Link to="/">
            {/* Modal */}
            <div className="modal fade" id="modelIdComplete" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal__dialog ModalComplete__dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body modalComplete__body">
                            <FontAwesomeIcon icon={faCheckCircle} className="modalComplete__icon"/>
                            <span className="modalComplete__text">Chúc mừng bạn đã đặt vé thành công!</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
