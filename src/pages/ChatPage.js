import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import SideBarInfo from "../components/SideBarInfo";

import Messages from "../components/Messages";
import Button from "../components/Button";
import SendBox from "../components/SendBox";
import styles from "./ChatPage.module.css";

import socket from "../socket-conn";

function ChatPage(props) {
	const [messages, setMessages] = useState([]);
	const [users, setUsers] = useState([]);
	const [roomName, setRoomName] = useState("");

	useEffect(() => {
		console.log(socket);
	}, []);

	useEffect(() => {
		socket.on("infoMessage", (message) => {
			console.log("inside infomessage");
			let temp = messages;
			temp.push(message);
			setMessages([...temp]);
		});

		socket.on("userMessage", (message) => {
			console.log("In usermessage");
			let temp = messages;
			temp.push(message);
			setMessages([...temp]);
		});
	}, [socket]);

	useEffect(() => {
		socket.on("getRoomInfo", (roomInfo) => {
			console.log("inside roominfoshit");
			setUsers(roomInfo.userList);
			setRoomName(roomInfo.roomName);
		});
	}, [socket]);

	const onMessageSend = (message) => {
		const messageFormatted = { type: "userMessage", message: message };
		console.log(messageFormatted);
		setMessages([...messages, messageFormatted]);
	};

	const onLeaveRoom = () => {
		console.log("Leaving room");
		socket.disconnect();
		props.hideChatPage();
	};

	return (
		<div className={styles.chatpage}>
			<aside className={styles.chatpage__sidebar}>
				<Logo className={styles.chatpage__sidebar__logo}></Logo>
				<SideBarInfo name={roomName} users={users} />
				<Button
					className={styles.chatpage__sidebar__button}
					onClick={onLeaveRoom}>
					Leave Room
				</Button>
			</aside>
			<div className={styles.chatpage__main}>
				<Messages messages={messages} />
				<SendBox onMessage={onMessageSend} />
			</div>
		</div>
	);
}

export default ChatPage;
