import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import shortid from 'shortid';

import ListView from '../listview/ListView';
import TableView from '../tableView/TableView';
import Controller from '../controllers/Controller';
import CreateTodoForm from '../create-form/CreateTodoForm';

export class Todos extends Component {
  state = {
    todos: [
      {
        id: 'a',
        text: 'this is first todos',
        description: 'simple description',
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: 'b',
        text: 'Second  todos',
        description: 'simple description',
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: 'c',
        text: 'what yo to do',
        description: 'simple description',
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: 'd',
        text: 'do somthing for you',
        description: 'simple description',
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchItem: '',
    view: 'list',
    filter: 'all',
  };
  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todo });
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todo });
  };
  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  // create todo ,where we create  the todo and this function push the todo into state
  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;
    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };
  // Filter function
  handleFilter = (filter) => {
    this.setState({ filter });
  };
  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === 'completed') {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === 'running') {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  //Search function
  handleSearch = (value) => {
    this.setState({ searchItem: value });
  };
  performSearch = (e) => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchItem.toLowerCase())
    );
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };
  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };
  reset = () => {
    this.setState({
      filter: 'all',
      searchItem: '',
      view: 'list',
      isOpenTodoForm: false,
    });
  };
  changeView = (e) => {
    this.setState({
      view: e.target.value,
    });
    console.log(this.value);
  };
  //select checkbox view & search view &filterview
  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === 'list' ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className='text-center display-4 my-5'>ToDo Application</h1>
        <Controller
          term={this.state.searchItem}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
          view={this.state.view}
          changeView={this.changeView}
          handleFilter={this.handleFilter}
          clearCompleted={this.clearCompleted}
          clearSelected={this.clearSelected}
          reset={this.reset}
        />
        <div>{this.getView()}</div>

        {/* <div>
          <ListView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <div>
          <TableView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div> */}
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create new Todo form
            <ModalBody>
              <CreateTodoForm createTodo={this.createTodo} />
            </ModalBody>
          </ModalHeader>
        </Modal>
      </div>
    );
  }
}

export default Todos;
