import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import type { User } from '@/shared/type/user';
import { DialogTitle } from '@radix-ui/react-dialog';

type UserInfoProps = {
	children?: React.ReactNode;
	user: User;
};

export const UserInfo = ({ children, user }: UserInfoProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogTitle>{user.name}</DialogTitle>
				<div>
					<div className='flex gap-2 justify-between'>
						<div className='grow-1 w-[40%]'>Телефон:</div>
						<div className='grow-1 w-[60%] text-muted-foreground text-sm'>
							{user.phone}
						</div>
					</div>
					<div className='flex gap-2 justify-between'>
						<div className='grow-1 w-[40%]'>Почта:</div>
						<div className='grow-1 w-[60%] text-muted-foreground text-sm'>
							{user.email}
						</div>
					</div>
					<div className='flex gap-2 justify-between'>
						<div className='grow-1 w-[40%]'>Дата приёма:</div>
						<div className='grow-1 w-[60%] text-muted-foreground text-sm'>
							{user.hire_date}
						</div>
					</div>
					<div className='flex gap-2 justify-between'>
						<div className='grow-1 w-[40%]'>Должность:</div>
						<div className='grow-1 w-[60%] text-muted-foreground text-sm'>
							{user.position_name}
						</div>
					</div>
					<div className='flex gap-2 justify-between'>
						<div className='grow-1 w-[40%]'>Подразделение:</div>
						<div className='grow-1 w-[60%] text-muted-foreground text-sm'>
							{user.department}
						</div>
					</div>
				</div>
				<div>
					<div>Дополнительная ифнормация</div>
					<div className='text-muted-foreground text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
						doloremque reiciendis est eum? Dolore neque ipsum dicta beatae
						provident blanditiis.
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
