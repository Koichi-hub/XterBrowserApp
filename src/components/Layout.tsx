import { ReactElement } from 'react';
import Sidebar from './Sidebar';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';

type Props = {
	children: ReactElement;
};

export default function Layout({ children }: Props) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid size={2}>
					<Sidebar />
				</Grid>
				<Grid size={10}>{children}</Grid>
			</Grid>
		</Box>
	);
}
