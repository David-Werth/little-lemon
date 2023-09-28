const getLocalStorage = () => {
	if (typeof window !== 'undefined') {
		let data = window.localStorage.getItem('USER_CART');
		data = JSON.parse(data);
		return data;
	}
};

export default getLocalStorage;
