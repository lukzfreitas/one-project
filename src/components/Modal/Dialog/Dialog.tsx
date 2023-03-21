import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../../Button/Button";
import ReactDOM from "react-dom";

import {
  DialogStyled,
  DialogContentStyled,
  DialogHeaderStyled,
  DialogFooterStyled,
  DialogTitleStyled,
  DialogBody
} from "./DialogStyled";

interface DialogProps {
  title: string;
  show: boolean;
  onClose: Function;
  children: any;
}

const Dialog = (props: DialogProps) => {

  const closeOnEscapeKeyDown = (e: any) => {
    if (e.keyCode === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  return ReactDOM.createPortal(
    <CSSTransition in={props.show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <DialogStyled show={props.show} onClick={() => props.onClose()}>
        <DialogContentStyled show={props.show} onClick={e => e.stopPropagation()}>
          <DialogHeaderStyled>
            <DialogTitleStyled>{props.title}</DialogTitleStyled>
          </DialogHeaderStyled>
          <DialogBody>{props.children}</DialogBody>
          <DialogFooterStyled>
            <Button onClick={() => props.onClose()} title="Close" key="close"></Button>
          </DialogFooterStyled>
        </DialogContentStyled>
      </DialogStyled>
    </CSSTransition>,
    document.getElementById('root') as HTMLElement
  );
}

export default Dialog;