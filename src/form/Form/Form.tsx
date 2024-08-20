import React, {DispatchWithoutAction, ReactNode} from 'react';
import styles from './Form.module.scss';
import classNames from '../../utils/classNames';

interface FormProps {
  children: ReactNode;
  onSubmit: DispatchWithoutAction;
  isDisabled: boolean;
}

function Form({children, onSubmit, isDisabled}: FormProps) {
  return (
    <div className={styles.form}>
      {children}
      <button
        className={classNames(styles.submit, isDisabled && styles.disabled)}
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Form;
