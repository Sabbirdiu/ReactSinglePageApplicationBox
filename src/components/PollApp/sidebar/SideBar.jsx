import React, { Component } from 'react';
import { Input, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import PollList from './PollList';
import PollForm from '../pollform/PollForm';

class SideBar extends Component {
  state = {
    openModal: false,
  };
  toggleModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };
  render() {
    return (
      <div style={{ background: 'gray', padding: '10px' }}>
        <div className='d-flex mb-5'>
          <Input
            type='search'
            placeholder='Search'
            value={this.props.searchTerm}
            onChange={(e) => this.props.handleSearch(e.target.value)}
          />
          <Button color='success' className='ml-2' onClick={this.toggleModal}>
            New
          </Button>
        </div>
        <h3>List of the polls</h3>
        <hr />
        <PollList polls={this.props.polls} selectPoll={this.props.selectPoll} />
        <Modal
          isOpen={this.state.openModal}
          toggle={this.toggleModal}
          unmountOnClose={true}
        >
          <ModalHeader toggle={this.toggleModal}>Create a new poll</ModalHeader>
          <ModalBody>
            <PollForm submit={this.props.addNewPoll} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SideBar;
