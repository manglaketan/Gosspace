import React from "react";
import styles from "./SideBarInfo.module.css";

function SideBarInfo({ name, users }) {
	return (
		<div className={styles.sidebarinfo}>
			<div>
				<h3>Gossip Name</h3>
				<p>{name}</p>
			</div>
			<div>
				<h3>Members</h3>
				<ul>
					{users.map((user) => {
						return <li key={user.userId}>{user.username}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

export default SideBarInfo;
