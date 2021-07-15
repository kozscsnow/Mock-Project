import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router';

function CountriesSearchInput(props) {
  const history = useHistory();
  const { listInfoCovidCountries } = props;
  const listCountriesData = listInfoCovidCountries.map((InfoCovidCountry) => {
    return { country: InfoCovidCountry.country };
  });
  const handleSelectInputChange = (event, value) => {
    history.push(`/countries/${value}`);
  };
  return (
    <div className="header-dashboard__input">
      <Autocomplete
        fullWidth={true}
        onChange={handleSelectInputChange}
        id="countries"
        size="small"
        freeSolo
        options={listCountriesData.map((option) => option.country)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Country"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}

export default CountriesSearchInput;
