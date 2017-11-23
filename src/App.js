import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { increase, decrease, fetchUser } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
  }

  search(e) {
    this.props.fetchUser(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.props.increase}>+</button>
        <button onClick={this.props.decrease}>-</button>
        <p>Number: {this.props.number}</p>

        <input type='text' onChange={this.search} />
        <p><img src={this.props.user.avatar_url} width={100} alt='' /></p>
      </div>
    );
  }
}

export default connect(
  store => ({
    number: store.counter.number,
    user: store.user
  }),
  { increase, decrease, fetchUser }
)(App);
