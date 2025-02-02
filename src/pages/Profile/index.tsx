import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';

type Profile = {
	id: string;
	firstName: string;
	lastName: string;
	userName: string;
	createDate: string;
};

export default function Profile() {
	const [profile, setProfile] = useState<Profile>();

	async function getProfile() {
		const response = await axios.get('http://localhost:5285/Profile', {
			withCredentials: true,
		});
		setProfile(response.data.data);
	}

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<Layout>
			<div>{profile?.userName}</div>
		</Layout>
	);
}
