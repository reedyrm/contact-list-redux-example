import React, { Component, Fragment } from 'react';


class EditContact extends Component {
  
  handleContactUpdated = (propertyName, updatedValue) => {
    
    const updatedContact = {
      ...this.props.contact
    };
  
    updatedContact[propertyName] = updatedValue;
    
    if(this.props.onUpdate) {
      this.props.onUpdate(updatedContact);
    }
  };
  
  render() {
    const { contact = {}} = this.props;
    
    console.log(`EditContact.contact: ${contact}`);
    
    return (
      <Fragment>
        <div>
          <span className={'EditContact-label'}>Name:</span>
          <input className={'EditContact-input'} type='text' value={contact.name || ''} onChange={(e) => this.handleContactUpdated('name', e.target.value)} />
        </div>
        <div style={{margin: '5px'}} />
        <div>
          <span className={'EditContact-label'}>Phone #:</span>
          <input className={'EditContact-input'} type='text' value={contact.phoneNumber || ''} onChange={(e) => this.handleContactUpdated('phoneNumber', e.target.value)} />
        </div>
      </Fragment>
    );
  }
  
}

export default EditContact;
