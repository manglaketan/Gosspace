import React from "react";
import styles from "./InfoMessage.module.css";

function InfoMessage(props) {
	return <li className={styles.infomessage}>{props.message}</li>;
}

export default InfoMessage;
