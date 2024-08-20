import React, {Dispatch, KeyboardEvent, SetStateAction} from 'react';
import styles from './Select.module.scss';

type OneOrMulti<G> = G | G[];

interface SelectControlProps {
  value?: OneOrMulti<string | number>;
  placeholder?: string;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function SelectControl({
  value,
  placeholder = 'Please Select...',
  setIsMenuOpen,
}: SelectControlProps) {
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  function handleKeyDown(e: KeyboardEvent) {
    if (e.code === 'Enter') toggleMenu();
  }

  const isEmpty = Array.isArray(value) ? !value.length : !value;

  const controlLabel = Array.isArray(value)
    ? value.map((tag) => (
        <div className={styles.tag} key={tag}>
          {tag}
        </div>
      ))
    : value;

  return (
    <div tabIndex={1} className={styles.trigger} onClick={toggleMenu} onKeyDown={handleKeyDown}>
      {isEmpty ? (
        <div className={styles.placeholder}>{placeholder}</div>
      ) : (
        <div className={styles.value}>{controlLabel}</div>
      )}
    </div>
  );
}

export default SelectControl;
