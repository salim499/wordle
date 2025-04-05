import { createPortal } from "react-dom";

import {
  ModalContainerS,
  ModalContentS,
  ButtonS,
  TitleS,
} from "./Common/Modal.style";

type ModalPropsT = {
  win: boolean;
  lost: boolean;
  handleClose: () => void;
};

const Modal = (props: ModalPropsT) => {
  return createPortal(
    <ModalContainerS>
      <ModalContentS>
        <TitleS win={props.win}>
          {props.win === true ? "Congratulations" : ""}
          {props.lost === true ? "Sorry, Try Again !" : ""}
        </TitleS>
        <ButtonS onClick={props.handleClose}>Play again</ButtonS>
      </ModalContentS>
    </ModalContainerS>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
