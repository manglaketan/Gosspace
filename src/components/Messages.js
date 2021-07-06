import React from "react";
import styles from "./Messages.module.css";
import Message from "./Message";
import InfoMessage from "./InfoMessage";

function Messages({ messages }) {
	return (
		<div className={styles.messages}>
			<ul>
				{messages.map((message) => {
					if (message.type === "user") {
						return (
							<Message
								username={message.username}
								timestamp={message.timestamp}
								message={message.message}
							/>
						);
					} else {
						return <InfoMessage message={message.message} />;
					}
				})}
			</ul>
		</div>
	);
}

export default Messages;
