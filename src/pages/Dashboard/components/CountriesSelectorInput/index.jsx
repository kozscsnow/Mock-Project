import React from 'react';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';

function CountriesSelectorInput(props) {
  const { value, onInputChange, listInfoCovidCountries } = props;
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
          {listInfoCovidCountries.map((country) => {
            return (
              <option
                key={country.countryInfo._id}
                value={country.countryInfo.iso2}
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
