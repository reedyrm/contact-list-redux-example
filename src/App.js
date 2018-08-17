import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import Contacts from './containers/Contacts';
import './App.css';
import { getContacts } from './actions';

class App extends Component {
  
  static mapDispatchToProps = (dispatch) => {
    
    return {
      getContacts: () => dispatch(getContacts())
    };
  };
  
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.getContacts();
  }
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact List</h1>
        </header>
        <Contacts />
      </div>
    );
  }
}

const ConnectedApp = connect(null, App.mapDispatchToProps)(App);

export default ConnectedApp;
