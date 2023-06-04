import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FormContainer, Label, Input, ErrorMsg, Button } from './ContactFormStyles';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required('Required'),
  number: yup
    .number()
    .min(6, 'Too Short!')
    .positive()
    .required('Required'),
});

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onFormSubmit}
        validationSchema={schema}
      >
        <Form>
          <FormContainer>
            <Label htmlFor="Name">
              Name
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <ErrorMsg name="name" />
            </Label>
            <Label htmlFor="number">
              Number
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrorMsg name="number" />
            </Label>
            <Button type="submit">Add contact</Button>
          </FormContainer>
        </Form>
      </Formik>
    );
  }
}
