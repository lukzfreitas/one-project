import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '../../Button/Button';
import ReactDOM from 'react-dom';

import {
  DialogStyled,
  DialogContentStyled,
  DialogFooterStyled,
} from './DialogStyled';
import DialogTitle from './DialogTitle';
import DialogBody from './DialogBody';

interface DialogProps {
  title: string;
  show: boolean;
  onClose: Function;
  children: any;
  root: any;
}

const Dialog = (props: DialogProps) => {
  const [container] = useState(document.createElement('root'));

  const closeOnEscapeKeyDown = (e: any) => {
    if (e.keyCode === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    props.root.appendChild(container);

    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
      props.root.removeChild(container);
    };
  });

  return ReactDOM.createPortal(
    <CSSTransition in={props.show} timeout={{ enter: 0, exit: 300 }}>
      <DialogStyled show={props.show} onClick={() => props.onClose()}>
        <DialogContentStyled
          show={props.show}
          onClick={(e) => e.stopPropagation()}
        >
          <DialogTitle>{props.title}</DialogTitle>
          <DialogBody data-testid="dialog-body">{props.children}</DialogBody>
          <DialogFooterStyled>
            <Button
              onClick={() => props.onClose()}
              title="Close"
              key="close"
            ></Button>
          </DialogFooterStyled>
        </DialogContentStyled>
      </DialogStyled>
    </CSSTransition>,
    document.getElementById('root') as HTMLElement
  );
};

export default Dialog;
