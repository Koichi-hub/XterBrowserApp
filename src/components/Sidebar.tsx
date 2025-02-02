import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useNavigate } from 'react-router';

export default function Sidebar() {
	const navigate = useNavigate();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate('/profile')}>
						<ListItemIcon>
							<AccountCircleIcon></AccountCircleIcon>
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate('/chat')}>
						<ListItemIcon>
							<ChatIcon></ChatIcon>
						</ListItemIcon>
						<ListItemText primary="Chat" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate('/feed')}>
						<ListItemIcon>
							<NewspaperIcon></NewspaperIcon>
						</ListItemIcon>
						<ListItemText primary="Feed" />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
}
