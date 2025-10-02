import { cn } from '@/lib/utils';
import type { User } from '@/shared/type/user';
import { Mail, Phone } from 'lucide-react';
import type { HTMLAttributes } from 'react';

type UserProps = {
	user: User;
} & HTMLAttributes<HTMLDivElement>;

export const UserElement = ({ user, ...attr }: UserProps) => {
	return (
		<div
			{...attr}
			className={cn(
				'border-border border-[1px] p-2 rounded-sm grow shadow-sm overflow-ellipsis overflow-hidden',
				attr.className
			)}
		>
			<h3 className='mb-2'>{user.name}</h3>
			<div className='flex gap-2 items-center text-muted-foreground'>
				<div>
					<Mail size={14} />
				</div>
				{user.email}
			</div>
			<div className='flex gap-2 items-center text-muted-foreground'>
				<div>
					<Phone size={14} />
				</div>
				{user.phone}
			</div>
		</div>
	);
};
