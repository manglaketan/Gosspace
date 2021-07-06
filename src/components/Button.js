import React from "react";
import styles from "./Button.module.css";

function Button(props) {
	return (
		<button
			className={`${styles.button} ${props.className} ${
				props.disabled && styles.disabled
			}`}
			disabled={props.disabled}
			type={props.type}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default Button;
