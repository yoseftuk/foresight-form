import React, {Dispatch, useMemo} from 'react';
import styles from './SelectMenu.module.scss';
import {SelectOption} from '../Select.types';
import classNames from '../../../utils/classNames';

interface MultiSelectListOptionsProps<Value extends string | number> {
  value?: Value[];
  onChange: Dispatch<Value[]>;
  options: SelectOption<Value>[];
}

function MultiSelectListOptions<Value extends string | number>({
  value: selectedValues = [],
  onChange,
  options,
}: MultiSelectListOptionsProps<Value>) {
  const isAllSelected = useMemo(
    () => options.every(({value}) => selectedValues?.includes(value)),
    [options, selectedValues],
  );

  return (
    <ul className={styles.options} data-testid={'multi-select-menu'}>
      <li
        className={classNames(styles.option, isAllSelected && styles.active)}
        onClick={() =>
          onChange(
            isAllSelected
              ? []
              : Array.from(new Set([...selectedValues, ...options.map((op) => op.value)])),
          )
        }
      >
        <input type={'checkbox'} checked={isAllSelected} readOnly />
        All
      </li>
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value);
        return (
          <li
            key={option.value}
            className={classNames(styles.option, isSelected && styles.active)}
            onClick={() =>
              onChange(
                isSelected
                  ? selectedValues.filter((val) => val !== option.value)
                  : [...selectedValues, option.value],
              )
            }
          >
            <input type={'checkbox'} checked={isSelected} readOnly />
            {option.label}
          </li>
        );
      })}
    </ul>
  );
}

export default MultiSelectListOptions;
