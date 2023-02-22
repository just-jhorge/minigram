import React, { createContext, useCallback, useContext, useState } from "react";

let alertId = 0;

export const AlertContext = createContext({
	alerts: [],
	addAlert: () => {},
	removeAlert: () => {},
});

const AlertContextWrapper = ({ children }) => {
	const [alerts, setAlerts] = useState([]);

	const addAlert = useCallback((alert) => {
		const newId = alertId;
		alertId++;

		const newAlert = {
			duration: 4000,
			...alert,
			id: newId,
		};

		setAlerts((alerts) => [...alerts, newAlert]);
	}, []);

	const removeAlert = useCallback(() => {
		setAlerts((alerts) => alerts.filter((alert) => alert.id !== id));
	}, []);

	const values = { alerts, addAlert, removeAlert };

	return (
		<AlertContext.Provider value={values}>{children}</AlertContext.Provider>
	);
};

export default AlertContextWrapper;
