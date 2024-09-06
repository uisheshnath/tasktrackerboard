import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastmsg = ({ type, message, show, onClose }) => {
  useEffect(() => {
    if (type === 'success') {
      toast.success(message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#28a745', color: '#000' },
        progressStyle: { backgroundColor: '#ffc107' },
      });
    } else if (type === 'error') {
      toast.error(message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#dc3545', color: '#fff' },
      });
    }
  }, [type, message]);

  return (
    <div className={`toast-container top-0 end-0 p-3`} style={{ position: 'fixed', zIndex: 1050 }}>
      <div className={`toast ${show ? 'show' : 'hide'} fade`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-body text-bg-success">
          <div className="d-flex gap-4">
            <div className="d-flex flex-grow-1 align-items-center">
              <span className="fw-semibold">{message}</span>
              <button
                type="button"
                className="btn-close btn-close-sm btn-close-black ms-auto"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toastmsg;
