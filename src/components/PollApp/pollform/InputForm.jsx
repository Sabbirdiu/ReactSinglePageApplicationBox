import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from 'reactstrap';
// import PropTypes from 'prop-types';

const InputForm = ({
  title,
  description,
  options,
  errors,
  buttonValue,
  handleChange,
  handleOptionChange,
  createOption,
  deleteOption,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='title'>Title</Label>
        <Input
          id='title'
          name='title'
          placeholder='write here the title'
          value={title}
          onChange={handleChange}
          invalid={errors.title ? true : false}
        />
        {errors.title && <FormFeedback> {errors.title} </FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for='description'>description</Label>
        <Input
          type='textarea'
          id='description'
          name='description'
          placeholder='write here the description'
          value={description}
          onChange={handleChange}
          invalid={errors.title ? true : false}
        />
        {errors.description && (
          <FormFeedback> {errors.description} </FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <Label>
          Enter options
          <span
            style={{
              marginLeft: '30px',
              background: 'green',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={createOption}
          >
            Add Option
          </span>
        </Label>
        {options.map((opt, index) => (
          <div key={opt.id} className='d-flex my-2'>
            <Input
              value={opt.value}
              onChange={(e) => handleOptionChange(e, index)}
              invalid={errors.options && errors.options[index] ? true : false}
            />
            <Button
              color='danger'
              disabled={options.length < 2}
              className='ml-2'
              onClick={() => deleteOption(index)}
            >
              Delete
            </Button>
          </div>
        ))}
      </FormGroup>

      <Button color='primary' type='submit'>
        {buttonValue}
      </Button>
    </Form>
  );
};

// InputForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

export default InputForm;
