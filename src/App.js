import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import Contacts from './containers/Contacts';
import './App.css';
import { getContacts } from './actions';

class App extends Component {
  
  static mapStateToProps = (state) => {
    
    return {};
  };
  
  static mapDispatchToProps = (dispatch) => {
    
    return {
      getContacts: () => dispatch(getContacts())
    };
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      selectedIndex: 0,
      contactList: [
        {
          id: 1,
          name: 'Kurt Palmer',
          phoneNumber: '(111) 111-1111'
        },
        {
          id: 2,
          name: 'Jane Watson',
          phoneNumber: '(222) 222-2222'
        }
      ]
    };
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

const ConnectedApp = connect(App.mapStateToProps, App.mapDispatchToProps)(App);

export default ConnectedApp;
