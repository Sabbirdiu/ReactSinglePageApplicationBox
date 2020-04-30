import React from 'react';
import ListItem from './ListItem';
import { ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';

//main component
const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </ListGroup>
  );
};
ListView.propTypes = {
  // todos: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
