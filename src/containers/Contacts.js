import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ContactList from '../components/ContactList';
import EditContact from '../components/EditContact';
import { updateContact } from '../actions';


class Contacts extends Component {
  
  static mapStateToProps = (state) => {
    const { contacts } = state;
    
    
    const contactList = Object.values(contacts.byId);
    
    return {
      contactList,
      contactsById: contacts.byId
    };
  };
  
  static mapDispatchToProps = (dispatch) => {
    
    
    return {
      updateContact: (params) => dispatch(updateContact(params))
    };
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      selectedContactId: null
    };
  }
  
  _onContactSelected = (contactId) => {
    this.setState({selectedContactId: contactId});
  };
  
  _onContactUpdated = (contact) => {
  
    this.props.updateContact({contact});
  };
  
  render() {
    const { contactList, contactsById } = this.props;
    const { selectedContactId } = this.state;
    
    let selectedContact = {};
    if(selectedContactId) {
      selectedContact = contactsById[selectedContactId];
    }
    
    return (
      <Fragment>
        <div>
          <ContactList contactList={contactList} onContactSelected={this._onContactSelected} selectedContactId={selectedContactId}/>
        </div>
        <hr />
        <EditContact contact={selectedContact} onUpdate={this._onContactUpdated} />
      </Fragment>
    );
  }
}

const ConnectedContacts = connect(Contacts.mapStateToProps, Contacts.mapDispatchToProps)(Contacts);

export default ConnectedContacts;
