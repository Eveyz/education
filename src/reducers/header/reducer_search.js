export default (state = false, action) => {
  switch(action.type) {
    case 'SEARCH': 
      return action.playload;
    default:
      return state;
  }
};