import React from 'react';
import styled from 'styled-components';

export const Balance = () => {
  return (
    <Bal>
      <h4>Your Balance</h4>
      <h1>$0.00</h1>
    </Bal>
  );
};

const Bal = styled.div`
  h1 {
    letter-spacing: 1px;
    margin: 0;
  }

  h4 {
    margin: 0;
    text-transform: uppercase;
  }
`;
