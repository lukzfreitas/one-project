import { useState } from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  rows?: number;
}

const TextArea = ({ rows = 3, ...props }: TextAreaProps) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="form-group">
      <label data-testid="label-textarea">{props.label}</label>
      <textarea
        data-testid="textarea"
        value={value}
        onChange={(e) => handleChange(e)}
        name="textAreaContent"
        className="form-control"
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
