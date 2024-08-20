import React, {useState} from 'react';
import styles from './App.module.scss';
import Input from './form/Input/Input';
import Select from './form/Select/Select';
import FormRow from './form/FormRow/FormRow';
import {AppForm} from './App.types';
import Form from './form/Form/Form';
import {moominCharachterOptions, prefixOptions} from './App.consts';

function App() {
  const [formData, setFormData] = useState<AppForm>({});
  function update<Prop extends keyof AppForm>(fieldName: Prop) {
    return (value: AppForm[Prop]) => setFormData((oldData) => ({...oldData, [fieldName]: value}));
  }

  function handleSubmit() {
    console.log('submit!', formData);
    setFormData({});
  }

  function isFormValid() {
    return (
      formData.prefix &&
      formData.firstName &&
      formData.lastName &&
      formData.moominCharachter &&
      formData.favoriteMoominCharachters?.length
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Moomin Survey</h1>
        <Form onSubmit={handleSubmit} isDisabled={!isFormValid()}>
          <FormRow>
            <Select
              value={formData.prefix}
              label={'Prefix'}
              placeholder={'Mr.'}
              onChange={update('prefix')}
              options={prefixOptions}
            />
            <Input
              value={formData.firstName}
              onChange={update('firstName')}
              placeholder={'e.g. Sniff'}
              label={'First Name:'}
            />
            <Input
              value={formData.lastName}
              onChange={update('lastName')}
              placeholder={'e.g. Fillyjonks'}
              label={'Last Name:'}
            />
          </FormRow>

          <Select
            value={formData.moominCharachter}
            label={'Which Moomin Charachter are you?'}
            onChange={update('moominCharachter')}
            options={moominCharachterOptions}
          />
          <Select
            value={formData.favoriteMoominCharachters}
            label={'Which Moomin Charachters you like?'}
            onChange={update('favoriteMoominCharachters')}
            options={moominCharachterOptions}
            isMultiple
          />
        </Form>
      </div>
    </div>
  );
}

export default App;
