const updateLocalStorage = (state) => {
	localStorage.setItem('USER_CART', JSON.stringify(state));
};

export default updateLocalStorage;
