import { useState } from 'react';
import Button from '../../Button/Button';
import Dialog from '../Dialog/Dialog';

const ExampleDialog = () => {
  const [show, setShow] = useState(false);

  const root = document.createElement('root');

  return (
    <div>
      <Button
        data-testid="button-dialog"
        title="Open Modal"
        onClick={() => setShow(true)}
        key="openModal"
      />
      <Dialog
        root={root}
        title="My Modal"
        onClose={() => setShow(false)}
        show={show}
      >
        <p>Modal is open!!!</p>
      </Dialog>
    </div>
  );
};

export default ExampleDialog;
