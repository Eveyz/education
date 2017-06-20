export const addBook = () => {
  // console.log("clicked");
  return {
    type: 'ADD_BOOK',
    payload: [{ 'title': 'Physic', 'time': '2 hours'}]
  }
};

export const deleteBook = () => {
  // console.log("clicked");
  return {
    type: 'DELETE_BOOK',
    payload: false
  }
};