export default (state = false, action) => {
  switch(action.type) {
    case 'LOGIN_MODAL': 
      return action.payload;
    case 'CLOSE_MODAL':
      return action.payload;
    default:
      return state;
  }
};