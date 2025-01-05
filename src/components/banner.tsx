import { FaNodeJs, FaReact } from 'react-icons/fa'
import { getUserInfo } from '../services'
import BlurFade from './ui/blur-fade'

import me from '@/assets/me.webp'
import { getDelay } from '@/utils'
import { cn } from '@/lib/utils'

export const Banner = () => {
	const user = getUserInfo()

	return (
		<div className='flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between'>
			<h1 className='grid gap-2 text-balance'>
				<BlurFade
					delay={getDelay(0)}
					inView
				>
					<span>{`Hi, I'm ${user.name} a`}</span>
				</BlurFade>
				<BlurFade
					delay={getDelay(1)}
					inView
				>
					<div className='relative grid place-items-center'>
						<span className='text-gradient z-10'>{user.role}</span>
						<span className='text-gradient absolute z-0 blur-xl'>
							{user.role}
						</span>
						<span className='text-gradient absolute blur-3xl'>{user.role}</span>
					</div>
				</BlurFade>
			</h1>
			<BlurFade
				delay={getDelay(2)}
				inView
			>
				<div
					className={cn(
						'relative',
						'grid',
						'h-[340px]',
						'w-[280px]',
						'place-items-center',
						'lg:h-auto',
						'lg:w-[350px]'
					)}
				>
					<FaReact
						className={cn(
							'absolute',
							'left-0',
							'top-[95px]',
							'h-auto',
							'w-[100px]',
							'animate-[levitate_6s_ease-in-out_infinite]',
							'fill-sky-400'
						)}
					/>
					<FaNodeJs
						className={cn(
							'absolute',
							'right-0',
							'top-[190px]',
							'h-auto',
							'w-[60px]',
							'animate-[levitate_6s_ease-in-out_infinite_1s]',
							'fill-green-400'
						)}
					/>
					<img
						src={me}
						alt='me'
						className=''
					/>
				</div>
			</BlurFade>
		</div>
	)
}
