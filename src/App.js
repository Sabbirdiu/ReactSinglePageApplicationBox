import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Todos from './components/TodoApp/todo/Todos';
import Poll from './components/PollApp/Poll';

function App() {
  return (
    <div>
      <Container className='my-3'>
        <Row>
          <Col>
            <Todos />
            <Poll />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
