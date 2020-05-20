import React from 'react';

import styled from 'styled-components';

import { Header } from './layout/Header';
import { Balance } from './layout/Balance';
import Income from './layout/Income';
import { TransactionList } from './layout/TransactionList';
import { AddTransaction } from './layout/AddTransaction';

function ExpanseTracker() {
  return (
    <Body>
      <div className='body'>
        <Header />
        <div className='container '>
          <Balance />
          <Income />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </Body>
  );
}

export default ExpanseTracker;
// under the style component in the object variable "body " is the html tag name
const Body = styled.body`
  .body {
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    font-family: 'Lato', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  .container {
    margin: 30px auto;
    width: 350px;
  }
`;
