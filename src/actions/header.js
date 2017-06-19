export const headSearch = () => {
  // console.log("clicked");
  return {
    type: 'SEARCH',
    playload: true
  }
};

export const cancelSearch = () => {
  // console.log("clicked");
  return {
    type: 'SEARCH',
    playload: false
  }
};