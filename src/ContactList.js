import React, { Component } from 'react';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
  
  render() {
    const { contactList, selectedContactId } = this.props;
    return (
      <div className={'ContactList-container'}>
        {
          contactList.map(contact => {
            return <ContactListItem key={contact.id}
                                    contact={contact}
                                    onContactSelected={this.props.onContactSelected}
                                    selectedContactId={selectedContactId} />
          })
        }
      </div>
    );
  }
}


export default ContactList;
