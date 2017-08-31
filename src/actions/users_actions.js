export const login = (user) => {
	return {
		type: 'USER_LOGIN',
		payload: user
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