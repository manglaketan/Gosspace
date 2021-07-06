import "./App.css";
import Starter from "./pages/Starter";
import ChatPage from "./pages/ChatPage";
import { useState } from "react";

function App() {
	const [isChatPage, setIsChatPage] = useState(false);

	const toggleChatPage = () => {
		setIsChatPage(!isChatPage);
	};

	return (
		<div className="App">
			{isChatPage ? (
				<ChatPage hideChatPage={toggleChatPage} />
			) : (
				<Starter showChatPage={toggleChatPage} />
			)}
		</div>
	);
}

export default App;
