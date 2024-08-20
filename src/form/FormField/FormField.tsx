import React, { ReactNode } from "react";
import styles from "./FormField.module.scss";

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {children}
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
}

export default FormField;
