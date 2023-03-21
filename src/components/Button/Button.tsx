interface ButtonProps {
    key: string;
    title: string;
    type?: "button" | "submit" | "reset";
    styleName?: "primary" | "link" | "danger";
    onClick: Function
  }
  
  const Button = ({
    type = "button",
    styleName = "primary",
    ...props
  }: ButtonProps) => {
    return (
      <button
        data-testid="button"
        key={props.key}
        type={type}
        onClick={() => props.onClick()}
        className={
          styleName === "primary"
            ? "btn btn-primary m-1"
            : styleName === "link"
            ? "btn btn-link m-1"
            : "btn btn-danger m-1"
        }
      >
        {props.title}
      </button>
    );
  };
  
  export default Button;
  