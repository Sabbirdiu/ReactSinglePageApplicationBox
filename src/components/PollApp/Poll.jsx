import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import shortid from 'shortid';
import MainContent from './maincontent/MainContent';
import SideBar from './sidebar/SideBar';
// import POLLS from './data/polls';

class Poll extends Component {
  state = {
    polls: [
      {
        id: '1',
        title: 'Which programming language do you like?',
        descrition: 'There are a lot of programming language available',
        options: [
          { id: '2', value: 'Java', vote: 0 },
          { id: '3', value: 'Java', vote: 0 },
          { id: '4', value: 'Java', vote: 0 },
        ],
        created: new Date(),
        totalvote: 0,
        opinions: [],
      },
      {
        id: '5',
        title: 'Which programming language do you like?',
        descrition: 'There are a lot of programming language available',
        options: [
          { id: '6', value: 'Java', vote: 0 },
          { id: '7', value: 'Java', vote: 0 },
          { id: '8', value: 'Java', vote: 0 },
        ],
        created: new Date(),
        totalvote: 0,
        opinions: [],
      },
      {
        id: '9',
        title: 'Which programming language do you like?',
        descrition: 'There are a lot of programming language available',
        options: [
          { id: '10', value: 'Java', vote: 0 },
          { id: '11', value: 'Java', vote: 0 },
          { id: '12', value: 'Java', vote: 0 },
        ],
        created: new Date(),
        totalvote: 0,
        opinions: [],
      },
    ],
    selectPoll: {},
    searchTerm: '',
  };
  // componentDidMount() {
  //   this.setState({ polls: POLLS });
  // }
  addNewPoll = (poll) => {
    poll.id = shortid.generate();
    poll.created = new Date();
    poll.totalVote = 0;
    poll.opinions = [];

    this.setState({
      polls: this.state.polls.concat(poll), //here concat is the default function who's work is take the all datafrom the state
    });
  };
  updatePoll = (updatedPoll) => {
    const polls = [...this.state.polls];
    const poll = polls.find((p) => p.id === updatedPoll.id);

    poll.title = updatedPoll.title;
    poll.description = updatedPoll.description;
    poll.options = updatedPoll.options;

    this.setState({ polls });
  };
  deletePoll = (pollId) => {
    const polls = this.state.profilr.filter((p) => p.id !== pollId);
    this.setState({ polls, selectPoll: {} });
  };
  selectPoll = (pollId) => {
    const poll = this.state.polls.filter((p) => p.id === pollId);
    this.setState({ selectPoll: poll });
  };
  handleSearch = (searchTerm) => {};
  render() {
    return (
      <div>
        <Container className='my-5'>
          <Row>
            <Col md={4}>
              <SideBar
                polls={this.state.polls}
                searchTerm={this.state.searchTerm}
                handleSearch={this.state.handleSearch}
                selectPoll={this.selectPoll}
                addNewPoll={this.addNewPoll}
              />
            </Col>
            <Col md={8}>
              <MainContent />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Poll;
