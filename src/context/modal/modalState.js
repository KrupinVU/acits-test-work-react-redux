import React, { useReducer } from "react";
import { HIDE_MODAL, SHOW_MODAL } from "../types";
import { ModalContext } from "./modalContext";
import { modalReducer} from "./modalReducer";

export const ModalState = ({children}) => {
  const [state, dispatch] = useReducer(modalReducer, {visible: false});
  const show = (id) => {
    dispatch({
      type: SHOW_MODAL,
      payload: { id }
    })
  }
  const hide = () => {
    dispatch({
      type: HIDE_MODAL
    })
  }
  return (
  <ModalContext.Provider value={{show, hide, modal: state}}>
    {children}
  </ModalContext.Provider>
  )
}