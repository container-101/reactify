import React from "react";
import ReactDOM from "react-dom";

function ModalPortals({ children }: { children: React.ReactNode }) {
	const modalElement = document.getElementById("modal") as Element;
	return ReactDOM.createPortal(children, modalElement);
}

export default ModalPortals;
