import type { User } from '@/shared/type/user';
import { UserElement } from './UserElement';
import { UserInfo } from '../modal/UserInfo';

type UserListProps = {
	users: User[];
};

export const UserList = ({ users }: UserListProps) => {
	return (
		<div className='flex gap-2 flex-wrap'>
			{users.map((user) => (
				<UserInfo user={user}>
					<UserElement
						className='w-[calc(33%-0.5rem)]'
						key={user.id}
						user={user}
					/>
				</UserInfo>
			))}
		</div>
	);
};
