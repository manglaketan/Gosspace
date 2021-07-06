import React, { useState } from "react";
import styles from "./SendBox.module.css";
import { ReactComponent as SendIcon } from "../assets/Send_Icon.svg";

import socket from "../socket-conn";

function SendBox(props) {
	const [message, setMessage] = useState("");

	const onMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const onMessageSend = (e) => {
		console.log("Emitting");
		e.preventDefault();
		setMessage("");
		socket.emit("userMessage", { userId: socket.id, message: message });
	};

	return (
		<form className={styles.sendbox} onSubmit={onMessageSend}>
			<input
				type="text"
				id="message"
				placeholder="Your Gossip Here..."
				value={message}
				autoComplete="off"
				required
				onChange={onMessageChange}
			/>
			<button>
				<SendIcon />
			</button>
		</form>
	);
}

export default SendBox;
