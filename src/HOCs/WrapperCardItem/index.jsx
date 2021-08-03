import React from 'react';

function WrapperCardItem(Card, cases, deaths, recovered) {
  return (props) => {
    return <Card {...props} />;
  };
}

export default WrapperCardItem;
