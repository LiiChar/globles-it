import axios from 'axios';
import type { User } from '../type/user';
import { env } from '../env/env';

export type UsersResponse = {
	data: User[];
	success: boolean;
};

export const getUsers = async () => {
	const users = await axios.get<UsersResponse>(env.SERVER_BASE_URL);

	return users.data.data;
};
