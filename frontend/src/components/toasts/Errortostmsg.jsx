import React, { useEffect, useState } from 'react';

const Errortostmsg = ({ message, show, onClose, duration = 2000 }) => {
    const [progress, setProgress] = useState(130);

    useEffect(() => {
        if (show) {
            setProgress(100);
            const interval = setInterval(() => {
                setProgress(prev => prev - 100 / (duration / 100));
            }, 90);
            const timeout = setTimeout(() => {
                onClose();
                clearInterval(interval);
            }, duration);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [show, duration, onClose]);

    return (
        <div className={`toast-container top-0 end-0 p-3`} style={{ position: 'fixed', zIndex: 1050 }}>
            <div className={`toast ${show ? 'show' : 'hide'} fade`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-body text-bg-discovery">
                    <div className="d-flex gap-4">
                        <div className="d-flex flex-grow-1 align-items-center">
                            <span className="fw-semibold">{message}</span>
                            <button
                                type="button"
                                className="btn-close btn-close-sm btn-close-black ms-auto text-white"
                                aria-label="Close"
                                onClick={onClose}
                            ></button>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div
                    style={{
                        height: '5px',
                        backgroundColor: '#007aff',
                        width: `${progress - 5.66}%`,
                        transition: 'width 0.1s linear'
                    }}
                />
            </div>
        </div>
    );
};

export default Errortostmsg;
