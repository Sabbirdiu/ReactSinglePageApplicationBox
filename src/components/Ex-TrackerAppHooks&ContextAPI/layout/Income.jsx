import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

const Income = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <IncomeBody>
      <div className='div'>
        <div className='inc-exp-container'>
          <div className='income'>
            <h4>Income</h4>
            <p className='money plus'>৳:+{income}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p className='money minus'>৳:-{expense}</p>
          </div>
        </div>
      </div>
    </IncomeBody>
  );
};
export default Income;
const IncomeBody = styled.div`
  h4 {
    margin: 0;
    text-transform: uppercase;
  }
  .inc-exp-container {
    background-color: #fff;
    box-shadow: var(--box-shadow);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  .inc-exp-container > div {
    flex: 1;
    text-align: center;
  }

  .inc-exp-container > div:first-of-type {
    border-right: 1px solid #dedede;
  }

  .money {
    font-size: 20px;
    letter-spacing: 1px;
    margin: 5px 0;
  }

  .money.plus {
    color: #2ecc71;
  }

  .money.minus {
    color: #c0392b;
  }
`;
