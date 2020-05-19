import React from 'react';
// import styles from './expanse.module.css';
import { Header } from './layout/Header';
import { Balance } from './layout/Balance';
import { Income } from './layout/Income';
import { TransactionList } from './layout/TransactionList';
import { AddTransaction } from './layout/AddTransaction';
function ExpanseTracker() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default ExpanseTracker;
