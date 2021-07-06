import React from "react";
import { ReactComponent as ChatTriangle } from "../assets/Chat_Triangle.svg";
import styles from "./Message.module.css";

function Message(props) {
	return (
		<div className={styles.message}>
			<ChatTriangle />
			<li>
				<div className={styles.message__top}>
					<span id="sender">{props.username}</span>
					<span id="date">{props.timestamp}</span>
				</div>
				{props.message}
			</li>
		</div>
	);
}

export default Message;
