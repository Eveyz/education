export const login = (user) => {
    console.log(user);
    return {
        type: 'USER_LOGIN',
        payload: user
    }
};