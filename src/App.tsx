import { BrowserRouter, Route, Routes } from 'react-router';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import Chat from './pages/Chat';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/feed" element={<Feed />}></Route>
				<Route path="/chat" element={<Chat />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
