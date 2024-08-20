import React, {Dispatch, HTMLProps} from 'react';
import styles from './Input.module.scss';

export interface InputUIProps
  extends Omit<HTMLProps<HTMLInputElement>, 'value' | 'onChange' | 'type'> {
  value?: string;
  onChange: Dispatch<string>;
  type?: 'text' | 'number';
}

function InputUI({value = '', onChange, ...props}: InputUIProps) {
  return (
    <div>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={1}
        {...props}
      />
    </div>
  );
}

export default InputUI;
