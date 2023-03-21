import { useState } from "react";

export interface SelectOption {
    value: any;
    label: string;
    selected: boolean;
  }
  
  export interface SelectProps {
    options: SelectOption[];    
    label?: string;
    placeholder?: string;
    onChange?: Function;
  }
  
  const Select = ({
    placeholder = '',
    label = '',
    onChange = () => {},
    ...props
  }: SelectProps) => {

    const [options, setSelectOptions] = useState(props.options)

    const handleValueChange = (event: any) => {
      const options: SelectOption[] = props.options.map((option: SelectOption) => {
        return  {...option, selected:  option.value === event.target.value}
      });
      setSelectOptions(options);
      onChange(options.filter(option => option.selected));
    }

    return (
      <section data-testid="select-section" className="form-group">
        <label>{label}</label>
        <select 
          data-testid="select"
          placeholder={placeholder}
          className="custom-select"
          id="inlineFormCustomSelectPref"
          onChange={(e) => handleValueChange(e)}>
          {options.map((option) =>
            option.selected ? (
              <option key={option.value} selected>
                {option.label}
              </option>
            ) : (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          )}
        </select>
      </section>
    );
  };
  
  export default Select;
  