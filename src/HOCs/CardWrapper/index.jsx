import React from 'react';

function CardWrapper(Card, cases, deaths, recovered) {
  return (props) => {
    return <Card {...props} />;
  };
}

export default CardWrapper;
