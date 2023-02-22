import React, { useEffect } from "react";
import "./alert.css";

const Alert = ({ type, style, label, close, duration }) => {
	useEffect(() => {
		setTimeout(close, duration);
	}, []);

	return (
		<div className={`alert ${type}`} style={style}>
			<p>{label}</p>
			<div className="icon" onClick={close}>
				Class
			</div>
			{duration && duration > 0 && (
				<div
					className="duration-bar"
					style={{ animationDuration: `${duration}ms` }}
				/>
			)}
		</div>
	);
};

export default Alert;
