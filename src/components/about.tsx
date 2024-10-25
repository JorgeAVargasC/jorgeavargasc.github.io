import { getUserInfo } from '@/services'
import { LinkIcon } from 'lucide-react'

export const About = () => {
	const user = getUserInfo()

	return (
		<div className='flex flex-col gap-5'>
			<a
				href='#about'
				className='group flex flex-row items-center'
			>
				<LinkIcon
					size={18}
					className='w-0 duration-200 group-hover:w-6'
				/>
				<h2>About</h2>
			</a>

			<div className='grid gap-4'>
				{user.bio.map((bio, index) => (
					<p className='text-secondary-foreground' key={index}>{bio}</p>
				))}
			</div>
		</div>
	)
}
