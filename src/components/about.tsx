import { getUserInfo } from '@/services'
import { LinkIcon } from 'lucide-react'
import BlurFade from './ui/blur-fade'
import { getDelay } from '@/utils'

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
				<BlurFade
					delay={getDelay(0)}
					inView
				>
					<h2>About</h2>
				</BlurFade>
			</a>

			<div className='grid gap-4 text-justify'>
				{user.bio.map((bio) => (
					<BlurFade
						delay={getDelay(0)}
						inView
						key={bio}
					>
						<p className='text-secondary-foreground'>{bio}</p>
					</BlurFade>
				))}
			</div>
		</div>
	)
}
