import React from 'react';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function InputField(props) {
  const { field, form, label, placeholder, disabled, type } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <>
      <FormGroup>
        {label && (
          <Label id="form-id" for={name}>
            {label}
          </Label>
        )}
        <Input
          type={type}
          placeholder={placeholder}
          className="form-id form-control text-center"
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
          invalid={showError}
        ></Input>
        {showError && (
          <small className="form-valid form-text text-danger">
            {errors[name]}
          </small>
        )}
        {/* <ErrorMessage name={name} /> */}
        {/* {label && <Label for={name}>{label}</Label>}
          <Input
            name={name}
            id={name}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
          /> */}
      </FormGroup>
    </>
  );
}

export default InputField;
