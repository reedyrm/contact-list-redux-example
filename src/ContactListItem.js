import React, { Component } from 'react';


class ContactListItem extends Component {
  
  _onContactSelected = (contactId) => {
    console.log(`_onContactSelected`);
    if(this.props.onContactSelected) {
      this.props.onContactSelected(contactId);
    }
  };
  
  render() {
    const {contact, selectedContactId } = this.props;
    return (
      <div className={`ContactListItem-container ${selectedContactId === contact.id ? 'selected' : ''}` } onClick={() => this._onContactSelected(contact.id)}>
        <div>
          <span className={'ContactListItem-label'}>Name:</span>
          <span>{contact.name}</span>
        </div>
        <div>
          <span className={'ContactListItem-label'}>Phone #:</span>
          <span>{contact.phoneNumber}</span>
        </div>
      </div>
    );
  }
}

export default ContactListItem;
