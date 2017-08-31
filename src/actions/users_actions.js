import axios from 'axios';

export const login = (user) => {
	return {
		type: 'USER_LOGIN',
		payload: user
	}
};

export const signup = (user) => {
	return function(dispatch){
    axios.post("/users/signup")
      .then(function(response) {
        dispatch({type: "USER_SIGNUP", payload: response.data})
      })
      .catch(function(err){
        dispatch({type: "USER_SIGNUP_FAILED", payload: err})
      })
  }
};

export const login_modal = () => {
	return {
		type: 'LOGIN_MODAL',
		payload: true
	}
};

export const signup_modal = () => {
	return {
		type: 'SIGNUP_MODAL',
		payload: true
	}
};