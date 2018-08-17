

const initializeState = function() {
  return {
    byId: {}
  };
};

const ContactReducer = (state = initializeState(), action) => {
  let newById = {};
  
  switch(action.type) {
    case 'UPDATE_CONTACT': {
      const { contact = {} } = action.payload;
      
      newById = {
        ...state.byId
      };
      
      if(contact) {
        newById[contact.id] = contact;
      }
      
      return {
        ...state,
        byId: newById
      };
    }
    case 'GET_CONTACTS': {
      const { contacts = [] } = action.payload;
  
      newById = {
        ...state.byId
      };
  
      contacts.forEach(contact => {
        newById[contact.id] = contact;
      });
      
      return {
        ...state,
        byId: newById
      };
    }
    default:
      return state;
  }
};

export { ContactReducer };
