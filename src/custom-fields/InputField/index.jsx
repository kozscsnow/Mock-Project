import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import styles from '../../assets/moduleCss/form.module.css';
import './InputField.scss';

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
    <div className="input-field__container">
      <FormGroup className={styles.formGroup}>
        {label && (
          <Label id="form-id" for={name} className={styles.label}>
            {label}
          </Label>
        )}
        <Input
          type={type}
          placeholder={placeholder}
          className={styles.inputForm}
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
          invalid={showError}
        ></Input>
        {showError && (
          <small className="form-valid form-text input-field__text--danger">
            {errors[name]}
          </small>
        )}
      </FormGroup>
    </div>
  );
}

export default InputField;
