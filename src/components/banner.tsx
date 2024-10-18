import { FaNodeJs, FaReact } from 'react-icons/fa'
import { getUserInfo } from '../services'
import BlurFade from './ui/blur-fade'

export const Banner = () => {
	const user = getUserInfo()

	const getDelay = (index: number) => {
		const [a, b] = [0.25, 0.7]
		return a + index * b
	}

	return (
		<div className='flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-5 md:flex-row md:justify-between'>
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
				<div className='relative grid h-[340px] w-[300px] place-items-center'>
					<FaReact
						className={`absolute left-0 top-[95px] h-auto w-[100px] animate-[levitate_12s_ease-in-out_infinite] fill-sky-400`}
					/>
					<FaNodeJs className='absolute right-0 top-[140px] h-[100px] w-[65px] animate-[levitate_12s_ease-in-out_infinite_1s] fill-green-400' />
					<img
						src={user.image}
						alt='me'
						width={270}
						height={300}
						className='saturate-0'
					/>
				</div>
			</BlurFade>
		</div>
	)
}
