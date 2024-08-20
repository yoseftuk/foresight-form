import React from 'react';
import FormField from '../FormField/FormField';
import InputUI, {InputUIProps} from './InputUI';

interface InputProps extends InputUIProps {
  label: string;
}

function Input({label, ...props}: InputProps) {
  return (
    <FormField label={label}>
      <InputUI {...props} />
    </FormField>
  );
}

export default Input;
