import React from 'react'
import './notifications.css'

const Notifications = () => {
    const red = [2];
    return (
        <>
            {
                red.length < 0
                    ?
                    red.map((i) => {
                        return (
                            <div className="col-md-3 notification-alerts">
                                <div className="col-md-12">
                                    <div className="toast-container position-static">
                                        <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                            <div className="toast-header">
                                                <i className="fa-solid fa-circle-info fa-lg text-primary me-2"></i>
                                                <strong className="me-auto">Bootstrap</strong>
                                                <small className="text-body-secondary">just now</small>
                                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body">
                                                See? Just like this.
                                            </div>
                                        </div>
                                        <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                            <div className="toast-header">
                                                <i className="fa-solid fa-circle-info fa-lg text-primary me-2"></i>
                                                <strong className="me-auto">Bootstrap</strong>
                                                <small className="text-body-secondary">2 seconds ago</small>
                                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body">
                                                Heads up, toasts will stack automatically
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    )
                    :
                   null
            }

        </>
    )
}

export default Notifications