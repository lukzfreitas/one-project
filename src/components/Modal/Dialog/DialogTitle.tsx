import { DialogHeaderStyled, DialogTitleStyled } from './DialogStyled';

interface DialogTitleProps {
  children: any;
}

const DialogTitle = (props: DialogTitleProps) => {
  return (
    <DialogHeaderStyled data-testid="title-dialog">
      <DialogTitleStyled>{props.children}</DialogTitleStyled>
    </DialogHeaderStyled>
  );
};

export default DialogTitle;
