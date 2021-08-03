import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const StyleSpin = styled(Spin)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
`;

LocalLoadingSpin.defaultProps = {
  height: '100%',
  width: '100%',
};
function LocalLoadingSpin(props) {
  const { height, width } = props;
  return (
    <div>
      <StyleSpin height={height} width={width} />
    </div>
  );
}

export default LocalLoadingSpin;
