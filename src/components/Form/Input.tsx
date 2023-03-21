import { useState } from "react";

interface InputProps {
  key: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: any;
  onChange?: Function;
  pattern?: string;
}

const Input = ({
  label = '',
  value = '',
  onChange = () => {},
  placeholder = "",
  type = "text",
  ...props
}: InputProps) => {
  const [text, setText] = useState(value);

  const handleChangeValue = (event: any) => {    
    setText(event.target.value);
    onChange(event.target.value);
  };

  return (
    <section data-testid="input-section" className="form-group">
      {label ? <label htmlFor={props.key}>{label}</label> : null}
      <input        
        data-testid="input"
        pattern={props.pattern}
        type={type}
        className="form-control"
        id={props.key}
        placeholder={placeholder}
        value={text}        
        onChange={(e) => handleChangeValue(e)}
      />
    </section>
  );
};

export default Input;
