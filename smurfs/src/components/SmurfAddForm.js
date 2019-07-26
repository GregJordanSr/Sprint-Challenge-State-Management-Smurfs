import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/actions";
import { Container, Form, Button } from "semantic-ui-react";

class SmurfAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  handleChange = event => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [event.target.name]: event.target.value
      }
    });
  };

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.addSmurf}>
          <Form.Field>
            <label>Add Smurf Name</label>
            <input
              type="text"
              name="name"
              placeholder="Add Name"
              onChange={this.handleChange}
              value={this.state.newSmurf.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Add Smurf Age</label>
                <input
                type="text"
                name="age"
                placeholder="Add Age"
                onChange={this.handleChange}
                value={this.state.newSmurf.age}
                />
          </Form.Field>
          <Form.Field>
            <label>Add Smurf Height</label>
                <input
                type="text"
                name="height"
                placeholder="Add Height"
                onChange={this.handleChange}
                value={this.state.newSmurf.height}
                />
          </Form.Field>

          {this.props.addError ? <h3>There was a smurf-up</h3> : null}
          {this.props.successMessage ? (
            <h3>Welcome {this.state.newSmurf.name} smurf to our village!</h3>
          ) : null}
          <button type="submit">
            {this.props.addingSmurf ? (
              <h5>Adding to village...</h5>
            ) : (
              "Add Smurf"
            )}
          </button>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf,
    successMessage: state.successMessage,
    postError: state.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfAddForm);
