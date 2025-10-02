import { Search } from '@/components/search/Search';
import { UserList } from '@/components/user/UserList';
import { getUsers } from '@/shared/api/user';
import { useQuery } from '@/shared/hooks';
import type { User } from '@/shared/type/user';
import { useState } from 'react';

export const UserPage = () => {
	const { data, isLoading, error } = useQuery(getUsers, {
		placeholderData: [],
		keys: ['users'],
	});
	const [suggestions, setSuggestions] = useState<User[]>([]);
	return (
		<main>
			<div className='pb-4'>
				<Search onSearch={setSuggestions} />
			</div>
			<div>
				{isLoading ? (
					<p>Loading...</p>
				) : error ? (
					<p>{error.message}</p>
				) : data ? (
					<UserList users={suggestions.length > 0 ? suggestions : data} />
				) : null}
			</div>
		</main>
	);
};
