import React from 'react';
import PropTypes from 'prop-types';
import { Label, CustomInput } from 'reactstrap';

const ViewController = ({ changeView, view }) => {
  return (
    <div className='d-flex'>
      <Label for='list-view' className='mr-4'>
        <CustomInput
          className='d-inline-block'
          type='checkbox'
          name='view'
          value='list'
          id='list-view'
          checked={view === 'list'}
          onChange={changeView}
        />
        List View
      </Label>
      <Label for='table-view' className='mr-4'>
        <CustomInput
          className='d-inline-block'
          type='checkbox'
          name='view'
          value='table'
          id='table-view'
          checked={view === 'table'}
          onChange={changeView}
        />
        Table View
      </Label>
    </div>
  );
};

ViewController.propTypes = {
  changeView: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
};

export default ViewController;
