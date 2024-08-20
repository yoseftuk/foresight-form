import React, {ReactNode} from 'react';
import styles from './FormRow.module.scss';

interface FormRowProps {
  children: ReactNode;
}

function FormRow({children}: FormRowProps) {
  return <div className={styles.row}>{children}</div>;
}

export default FormRow;
