import axios from 'axios';

export const getEvents = () => {
  return function(dispatch){
    axios.get("/events")
      .then(function(response) {
        dispatch({type: "GET_EVENTS", payload: response.data})
      })
      .catch(function(err){
        dispatch({type: "GET_EVENTS_REJECTED", payload: err})
      })
  }
};

export const addEvent = (event) => {
  return function(dispatch) {
    axios.post("/events", event)
      .then(function(response){
        dispatch({type: "ADD_EVENT", payload: response.data})
      })
      .catch(function(err){
        dispatch({type: "ADD_EVENT_REJECTED", payload: "there was an error while posting a new event"})
      })
  }
};