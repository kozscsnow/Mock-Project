import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router';
import './CountriesSearchInput.scss';
import { useTranslation } from 'react-i18next';

function CountriesSearchInput(props) {
  const { t } = useTranslation();
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
        className="header-dashboard__input-item"
        fullWidth={true}
        onChange={handleSelectInputChange}
        id="countries"
        size="small"
        freeSolo
        options={listCountriesData.map((option) => option.country)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t('dashboard_header_input_search-country')}
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}

export default CountriesSearchInput;
