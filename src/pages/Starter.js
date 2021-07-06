import React, { useEffect, useState } from "react";
import styles from "./Starter.module.css";
import Button from "../components/Button";
import { ReactComponent as Logo } from "../assets/Logo.svg";

// const socket = require("../socket-conn").socket;
import socket from "../socket-conn";

const rooms = ["Planes", "Trains", "Cars", "Ships"];

function Starter({ showChatPage }) {
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		if (username === "" || room === "") setIsFormValid(false);
		else setIsFormValid(true);
	}, [username, room]);

	const onUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const onRoomChange = (event) => {
		setRoom(event.target.value);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		console.log(username, room);

		socket.emit("joinUser", {
			username: username,
			room: room,
			userId: socket.id,
		});
		setUsername("");
		setRoom("");
		showChatPage();
	};

	return (
		<div className={styles.starter}>
			<Logo className={styles.starter__logo}></Logo>
			<form className={styles.starter__form} onSubmit={onFormSubmit}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					placeholder="Choose a nickname"
					onChange={onUsernameChange}
					value={username}
					autoComplete="off"
					required
				/>

				<label htmlFor="room">Join an Existing Room</label>
				<select
					name="room"
					id="room"
					placeholder="Select an Option"
					onChange={onRoomChange}>
					<option disabled selected hidden>
						Select an Option
					</option>
					{rooms.map((room) => {
						return <option value={`${room}`}>{room}</option>;
					})}
				</select>
				<Button className={styles.starter__button} disabled={!isFormValid}>
					Join Room
				</Button>
			</form>
		</div>
	);
}

export default Starter;
