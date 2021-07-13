import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import React from 'react';
import ScrollToTop from 'react-scroll-up';

function ScrollToTopButton(props) {
  return (
    <div>
      <ScrollToTop showUnder={50} style={{ right: '6vw' }}>
        <ArrowUpwardIcon
          style={{
            fontSize: 50,
            backgroundColor: '#17A2B8',
            borderRadius: '50%',
            opacity: 0.4,
          }}
        />
      </ScrollToTop>
    </div>
  );
}

export default ScrollToTopButton;
