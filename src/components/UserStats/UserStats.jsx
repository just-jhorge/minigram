import React from "react";

const UserStats = ({ number, description }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h3 className="font-medium">{number}</h3>
			<p className="text-xs text-gray-500">{description}</p>
		</div>
	);
};

export default UserStats;
