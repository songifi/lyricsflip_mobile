export const login = (userData: any) => ({
    type: 'LOGIN',
    payload: userData,
});

export const logout = () => ({
    type: 'LOGOUT',
});