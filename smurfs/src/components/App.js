import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import SmurfAddForm from './SmurfAddForm';
import { getSmurfs } from '../actions/actions';
import SmurfVillage from './SmurfVillage';
import { Header, Segment, Divider } from "semantic-ui-react";

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Segment >
          <Header as='h1' color="blue">
            Smurf Village
          </Header>
         <Divider hidden />
          <div>
            <SmurfVillage smurfs={this.props.smurfs} />
            <SmurfAddForm />
          </div>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addError: state.addError,
  addSuccess: state.addSuccess
})


export default connect(mapStateToProps, { getSmurfs })(App);

