import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

FilterDayBox.propTypes = {};

const StyleTypography = styled(Typography)`
  color: ${(props) => props.theme.textColor};
`;
const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function FilterDayBox(props) {
  const [date, setDate] = useState('100');
  const handleFilterDayChange = (event, value) => {
    setDate(value);
  };
  return (
    <div className="detail-info-covid-country__pretto-slider">
      <StyleTypography gutterBottom>Filter Day</StyleTypography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={0}
        onChangeCommitted={handleFilterDayChange}
      />
    </div>
  );
}

export default FilterDayBox;
