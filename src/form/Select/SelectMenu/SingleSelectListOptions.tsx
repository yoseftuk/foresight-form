import React, {Dispatch} from 'react';
import styles from './SelectMenu.module.scss';
import {SelectOption} from '../Select.types';
import classNames from '../../../utils/classNames';

interface SingleSelectListOptionsProps<Value extends string | number> {
  options: SelectOption<Value>[];
  value?: Value;
  onChange: Dispatch<Value>;
}

function SingleSelectListOptions<Value extends string | number>({
  options,
  value: currentValue,
  onChange,
}: SingleSelectListOptionsProps<Value>) {
  return (
    <ul className={styles.options} data-testid={'single-select-menu'}>
      {options.map(({label, value}) => (
        <li
          key={value}
          className={classNames(styles.option, value === currentValue && styles.active)}
          onClick={() => {
            onChange(value);
          }}
        >
          {label}
        </li>
      ))}
    </ul>
  );
}

export default SingleSelectListOptions;
