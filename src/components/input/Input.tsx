import React, { ChangeEvent } from 'react';
import './Input.scss';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      <div className='label'>{props.label}</div>
      <input
        className='input'
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          props.onChange(e.target.value)
        }
      />
    </div>
  );
};

export default Input;
