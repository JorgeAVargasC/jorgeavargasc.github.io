import { getUserInfo } from '@/services'
import ShineBorder from './ui/shine-border'
import { TbBrandGithub, TbExternalLink } from 'react-icons/tb'

export const Projects = () => {
	const user = getUserInfo()

	return (
		<div className='grid min-h-screen place-items-center'>
			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{user.projects.map((project, index) => (
					<ShineBorder
						key={index}
						className='min-w-full'
						color={['#38BDF8', '#4ADE80']}
					>
						<div className='z-10 flex w-full flex-col gap-5'>
							<a
								href={project.liveURL}
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={project.imageUrl}
									alt={project.name}
									className='w-full rounded-md'
								/>
							</a>

							<div className='flex items-start justify-between'>
								<h5 className='w-full'>{project.name}</h5>

								<div className='flex gap-2'>
									<a
										href={project.githubURL}
										target='_blank'
										rel='noreferrer'
										className='cursor-pointer'
									>
										<TbBrandGithub size={24} />
									</a>
									<a
										href={project.liveURL}
										target='_blank'
										rel='noreferrer'
										className='cursor-pointer'
									>
										<TbExternalLink size={24} />
									</a>
								</div>
							</div>
						</div>
					</ShineBorder>
				))}
			</div>
		</div>
	)
}
