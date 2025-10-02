import { Command, CommandInput, CommandList } from '@/components/ui/command';
import { getUsers } from '@/shared/api/user';
import { useQuery } from '@/shared/hooks';
import type { User } from '@/shared/type/user';
import { CommandEmpty } from 'cmdk';
import { useState } from 'react';

type SeachProps = {
	onSearch?: (s: User[]) => void;
};

export const Search = ({ onSearch }: SeachProps) => {
	const [search, setSearch] = useState('');
	const { data } = useQuery(getUsers, {
		placeholderData: [],
		keys: ['users'],
	});
	const [suggestions, setSuggestions] = useState<User[]>([]);

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		setSearch(e.currentTarget.value);
		handleSearch(e.currentTarget.value);
	};

	const handleSearch = (s: string) => {
		const sug = (data as User[]).filter((user) =>
			user.name.toLowerCase().includes(s.toLowerCase())
		);
		onSearch?.(sug);
		setSuggestions(sug);
	};

	return (
		<Command className='className="rounded-lg border shadow-md md:min-w-[450px]"'>
			<CommandInput
				value={search}
				onInput={handleInput}
				placeholder='Введите имя пользователя'
			/>
			<CommandList>
				{suggestions.length == 0 && search.length > 0 && (
					<CommandEmpty className='py-2 text-center'>
						Пользователей не найдено
					</CommandEmpty>
				)}
			</CommandList>
		</Command>
	);
};
