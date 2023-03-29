interface DialogBodyProps {
  children: any;
}

const DialogBody = (props: DialogBodyProps) => {
  return <div data-testid="dialog-body">{props.children}</div>;
};

export default DialogBody;
