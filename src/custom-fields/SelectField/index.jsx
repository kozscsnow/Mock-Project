import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  option: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

SelectField.defaultProps = {
  option: [],
  label: '',
  placeholder: '',
  disabled: false,
};

function SelectField(props) {
  const { field, form, label, placeholder, disabled, options } = props;
  const { name, value, onChange, onBlur } = field;

  const selectOption = options.filter(option => option.value === value)

  const handleSelectOptionChange = (selectOption) => {
    const selectValue = selectOption ? selectOption.value : selectOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectValue,
      },
    };

    field.onChange(changeEvent);
  };
  return (
    <div>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Select
          name={name}
          id={name}
          value={selectOption}
          onBlur={onBlur}
          placeholder={placeholder}
          onChange={handleSelectOptionChange}
          disabled={disabled}
          options={options}
        />
      </FormGroup>
    </div>
  );
}

export default SelectField;
