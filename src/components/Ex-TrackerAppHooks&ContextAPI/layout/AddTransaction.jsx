import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const clearState = () => {
    setText('');
    setAmount('');
  };
  const onSubmit = (e) => {
    e.preventDefault();
    clearState();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <AddTrans>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className='form-contro'>
            <label htmlFor='text'>Text</label>
            <input
              className='form-control'
              value={text}
              onChange={(e) => setText(e.target.value)}
              type='text'
              placeholder='Enter text...'
            />
          </div>
          <div className='form-contro'>
            <label htmlFor='amount'>
              Amount <br />
              (when you add your expense use "-" sign befor number)
            </label>
            <input
              className='form-control'
              type='number'
              placeholder='Enter amount...'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button className='btn'>Add transaction</button>
        </form>
      </AddTrans>
    </>
  );
};
const AddTrans = styled.div`
  h3 {
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
  }
  .btn {
    cursor: pointer;
    background-color: #9c88ff;
    box-shadow: var(--box-shadow);
    color: #fff;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 10px;
    width: 100%;
  }

  .btn:focus {
    outline: 0;
  }
  label {
    display: inline-block;
    margin: 10px 0;
  }

  input[type='text'],
  input[type='number'] {
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }
`;
