const INITIAL_STATE = { //because in the first time the is no state
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case 'SET_CURRENT_USER':
          return {
              ...state,
              currentUser: action.payload
          } 
      default:
          return state;
  }  
}

export default userReducer;