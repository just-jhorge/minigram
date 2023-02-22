import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import AlertContextWrapper from "./context/AlertContext";
import AuthContextWrapper from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AlertContextWrapper>
				<AuthContextWrapper>
					<App />
				</AuthContextWrapper>
			</AlertContextWrapper>
		</BrowserRouter>
	</React.StrictMode>
);
