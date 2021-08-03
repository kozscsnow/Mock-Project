import { Typography, withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import React, { useState } from 'react';
import styled from 'styled-components';

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
  const { onFilterDayChange } = props;
  const [date, setDate] = useState(0);
  const handleFilterDayChange = (event, value) => {
    if (!onFilterDayChange) return;
    setDate(value);
    onFilterDayChange(value);
  };
  return (
    <div className="detail-info-covid-country__pretto-slider">
      <StyleTypography gutterBottom>
        Filter <span>{date}</span> Day
      </StyleTypography>
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
