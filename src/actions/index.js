

export const getContacts = () => {
  return (dispatch) => {
  
    dispatch({
      type: 'GET_CONTACTS',
      payload: {
        contacts: [
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
      }
    })
  };
};

export const updateContact = (params) => {
  const { contact } = params;
  
  
  return (dispatch) => {
    
    dispatch({
      type: 'UPDATE_CONTACT',
      payload: {
        contact: contact
      }
    });
  };
};
