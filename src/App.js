import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Todos from './components/TodoApp/todo/Todos';
import Poll from './components/PollApp/Poll';
import MainHeader from './components/NavLink/MainHeader';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <div>
        <Container className='my-3'>
          <Row>
            <Col>
              <MainHeader />
              <Route exact path='/' component={Todos} />
              <Route exact path='/poll' component={Poll} />
              {/* <Todos />
              <Poll /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </Switch>
  );
}

export default App;
