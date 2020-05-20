import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <Transaction>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <li className='minus'>
            {transaction.text} <span>-$400</span>
            <button className='delete-btn'>x</button>
          </li>
        ))}
      </ul>
    </Transaction>
  );
};

const Transaction = styled.div`
  .list {
    list-style-type: none;
    padding: 0;
    margin-bottom: 40px;
  }

  .list li {
    background-color: #fff;
    box-shadow: var(--box-shadow);
    color: #333;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    margin: 10px 0;
  }

  .list li.plus {
    border-right: 5px solid #2ecc71;
  }

  .list li.minus {
    border-right: 5px solid #c0392b;
  }

  .delete-btn {
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .list li:hover .delete-btn {
    opacity: 1;
  }

  .delete-btn:focus {
    outline: 0;
  }
`;
