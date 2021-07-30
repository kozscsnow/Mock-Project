import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './CountriesSearchInput.scss';

// const StyleAutocomplete = styled(Autocomplete)`
//   color: ${(props) => props.theme.inputColor};
// `;

function CountriesSearchInput(props) {
  const { t } = useTranslation();
  const history = useHistory();
  const themeStore = useSelector((state) => state.GlobalReducer.theme);
  const { listInfoCovidCountries } = props;
  const listCountriesData = listInfoCovidCountries.map((InfoCovidCountry) => {
    return { country: InfoCovidCountry.country };
  });
  const handleSelectInputChange = (event, value) => {
    history.push(`/countries/${value}`);
  };

  const darkTheme = createTheme({
    palette: {
      type: themeStore,
    },
  });

  return (
    <div className="header-dashboard__input">
      <ThemeProvider theme={darkTheme}>
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
      </ThemeProvider>
    </div>
  );
}

export default CountriesSearchInput;
