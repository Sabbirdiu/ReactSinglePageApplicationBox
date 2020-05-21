import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Bal>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
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
