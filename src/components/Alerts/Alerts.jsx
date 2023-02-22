import React from "react";
import { useAlert } from "../../context/AlertContext";
import Alert from "../Alert/Alert";

const Alerts = () => {
	const { alerts, removeAlert } = useAlert();

	return (
		<div className="alerts-container">
			{alerts.map((alert) => {
				return (
					<Alert
						key={alert.id}
						label={alert.label}
						type={alert.type}
						duration={alert.duration}
						close={() => removeAlert(alert.id)}
					/>
				);
			})}
		</div>
	);
};

export default Alerts;
