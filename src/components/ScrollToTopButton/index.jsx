import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import React from 'react';
import ScrollToTop from 'react-scroll-up';
import styled from 'styled-components';

const StyleArrowUpwardIcon = styled(ArrowUpwardIcon)`
  background: ${(props) => props.theme.scrollColor};
`;

function ScrollToTopButton(props) {
  return (
    <div>
      <ScrollToTop showUnder={50} style={{ right: '2vw' }}>
        <StyleArrowUpwardIcon
          style={{
            fontSize: 50,
            borderRadius: '50%',
            opacity: 0.4,
          }}
        />
      </ScrollToTop>
    </div>
  );
}

export default ScrollToTopButton;
