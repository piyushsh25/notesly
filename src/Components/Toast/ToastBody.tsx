import Toast from "react-bootstrap/Toast";
import { useDispatch, useSelector } from "react-redux";
import { toastAction } from "../../Hooks/slices/ToastSlice";
import { RootState } from "../../Hooks/store";
import "./Toast.css";
// 'Primary',
// 'Secondary',
// 'Success',
// 'Danger',
// 'Warning',
// 'Info',
// 'Light',
// 'Dark',

export function ToastComponent() {
  const { messageHeader, messageDescription, color } = useSelector(
    (store: RootState) => store.toastReducer
  );
  const dispatch = useDispatch();
  return (
    <div className="message-container">
      <Toast className="d-inline-block m-1" bg={color.toLowerCase()}>
        <Toast.Header
          onClick={() =>
            dispatch(toastAction.setToastHandler({ message: false }))
          }
        >
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{messageHeader}</strong>
        </Toast.Header>
        <Toast.Body className={color === "Dark" ? "text-white" : "text"}>
          {messageDescription}
        </Toast.Body>
      </Toast>
    </div>
  );
}