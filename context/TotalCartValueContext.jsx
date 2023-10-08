'use client';

import { createContext, useState } from 'react';

export const TotalCartValueContext = createContext();

export const TotalCartValueWrapper = ({ children }) => {
	const [total, setTotal] = useState(0);

	return (
		<TotalCartValueContext.Provider
			value={{
				total,
				setTotal,
			}}
		>
			{children}
		</TotalCartValueContext.Provider>
	);
};
