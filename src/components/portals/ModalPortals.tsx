import React from "react";
import ReactDOM from "react-dom";

function ModalPortals({ children }: { children: React.ReactChild }) {
	const modalElement = document.querySelector("#modal") as Element;
	return ReactDOM.createPortal(children, modalElement);
}

export default ModalPortals;
