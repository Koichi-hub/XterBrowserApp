import { Box, Button } from '@mui/material';
import axios from 'axios';

export default function Home() {
	async function Login() {
		await axios.get('http://localhost:5285/Auth/login/Koichi-hub', {
			withCredentials: true,
		});
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Button onClick={() => Login()}>Login</Button>
		</Box>
	);
}
