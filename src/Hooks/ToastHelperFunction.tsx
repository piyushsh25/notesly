
import { toastAction } from "./slices/Toast/ToastSlice";
import { AppDispatch } from "./store";

export const ToastInvokeFunc = (dispatch:AppDispatch,header:string, content:string, backgroundColor:string) => {
  dispatch(
    toastAction.setMessage({
      header: header,
      description: content,
      color: backgroundColor,
    })
  );
  dispatch(toastAction.setToastHandler({ message: true }));
  setTimeout(() => {
    dispatch(toastAction.setToastHandler({ message: false }));
  }, 5000);
};
