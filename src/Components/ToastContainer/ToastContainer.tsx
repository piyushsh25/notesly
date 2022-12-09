import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Toast.css";
export const Toastify = () => {
  return (
    <div className="toastify-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
