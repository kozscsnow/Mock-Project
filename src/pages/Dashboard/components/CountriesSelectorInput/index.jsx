import React from 'react';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';

function CountriesSelectorInput(props) {
  const { value, onInputChange, countries } = props;
  return (
    <div>
      <FormControl style={{ width: '200px' }}>
        <InputLabel htmlFor="country-selector" shrink>
          Chon Quoc Gia
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={onInputChange}
          inputProps={{
            name: 'country',
            id: 'country-selector',
          }}
        >
          {countries.map((country) => {
            return (
              <option
                value={country.countryInfo.iso2}
                // key={country.countryInfo._id}
              >
                {country.country}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountriesSelectorInput;
