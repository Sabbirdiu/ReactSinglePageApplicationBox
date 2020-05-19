import React from 'react';

export const AddTransaction = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-contro'>
          <label htmlFor='text'>Text</label>
          <input
            className='form-control'
            type='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-contro'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            className='form-control'
            type='number'
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  );
};
