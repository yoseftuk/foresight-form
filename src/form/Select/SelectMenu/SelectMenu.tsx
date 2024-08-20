import React, {ReactNode, useMemo, useState} from 'react';
import styles from './SelectMenu.module.scss';
import {SelectOption} from '../Select.types';
import InputUI from '../../Input/InputUI';

interface SelectMenuProps<Value extends string | number> {
  options: SelectOption<Value>[];
  children: (filteredOptions: SelectOption<Value>[]) => ReactNode;
}

function SelectMenu<Value extends string | number>({options, children}: SelectMenuProps<Value>) {
  const [searchInput, setSearchInput] = useState('');
  const filteredOptions = useMemo(
    () => options.filter(({label}) => label.toLowerCase().includes(searchInput.toLowerCase())),
    [options, searchInput],
  );

  return (
    <>
      <div className={styles.menu}>
        <InputUI value={searchInput} onChange={setSearchInput} placeholder={'Search..'} />
        {children(filteredOptions)}
      </div>
    </>
  );
}

export default SelectMenu;
