import React, {Dispatch, useState} from 'react';
import FormField from '../FormField/FormField';
import {SelectOption} from './Select.types';
import SelectControl from './SelectControl';
import Popup from '../../ui/Popup/Popup';
import SelectMenu from './SelectMenu/SelectMenu';
import SingleSelectListOptions from './SelectMenu/SingleSelectListOptions';
import MultiSelectListOptions from './SelectMenu/MultiSelectListOptions';

interface SelectPropsBase<Value extends string | number> {
  label: string;
  options: SelectOption<Value>[];
  placeholder?: string;
}

interface SelectPropsSingle<Value extends string | number> {
  isMultiple?: false;
  value?: Value;
  onChange: Dispatch<Value>;
}

interface SelectPropsMulti<Value extends string | number> {
  isMultiple: true;
  value?: Value[];
  onChange: Dispatch<Value[]>;
}

type SelectProps<Value extends string | number> = SelectPropsBase<Value> &
  (SelectPropsSingle<Value> | SelectPropsMulti<Value>);

function Select<Value extends string | number>(props: SelectProps<Value>) {
  const {value, label, options, placeholder} = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <FormField label={label}>
      <Popup
        isFitWidth
        content={
          <SelectMenu options={options}>
            {props.isMultiple
              ? (options) => (
                  <MultiSelectListOptions
                    value={props.value}
                    options={options}
                    onChange={(newVal) => {
                      props.onChange(
                        props.options
                          .filter(
                            ({value}) =>
                              (props.value?.includes(value) &&
                                options.every((opt) => opt.value !== value)) ||
                              newVal.includes(value),
                          )
                          .map((opt) => opt.value),
                      );
                    }}
                  />
                )
              : (options) => (
                  <SingleSelectListOptions
                    options={options}
                    value={props.value}
                    onChange={(value) => {
                      props.onChange(value);
                      setIsMenuOpen(false);
                    }}
                  />
                )}
          </SelectMenu>
        }
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <SelectControl
          value={value}
          placeholder={placeholder}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </Popup>
    </FormField>
  );
}

export default Select;
