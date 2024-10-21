import { getUserInfo } from '@/services'
import ShineBorder from './ui/shine-border'
import { TbBrandGithub, TbExternalLink } from 'react-icons/tb'
import { Button } from './ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from './ui/tooltip'
import { InfoIcon } from 'lucide-react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from './ui/accordion'
import { getDelay } from '@/utils'
import BlurFade from './ui/blur-fade'

export const Projects = () => {
	const user = getUserInfo()

	return (
		<div className='flex flex-col justify-center items-center'>
			<h2 className='py-8 text-center'>My Last Projects</h2>

			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{user.projects.map((project) => (
					<BlurFade
						key={project.id}
						delay={getDelay(0)}
						inView
					>
						<ShineBorder
							className='min-w-full p-4'
							color={['#38BDF8', '#4ADE80']}
						>
							<div className='z-10 flex flex-1 flex-col gap-4'>
								<a
									href={project.liveURL}
									target='_blank'
									rel='noreferrer'
								>
									<img
										src={project.imageUrl}
										alt={project.name}
										className='w-full rounded-lg'
									/>
								</a>

								<div className='flex items-center justify-between'>
									<h5 className='text-start'>{project.name}</h5>

									<div className='hidden lg:grid'>
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger>
													<InfoIcon size={20} />
												</TooltipTrigger>
												<TooltipContent>
													<div className='max-w-xs'>
														<p className='text-justify'>
															{project.description}
														</p>
													</div>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</div>
								</div>

								<div className='grid grid-cols-2 gap-4'>
									<a
										href={project.githubURL}
										target='_blank'
										rel='noreferrer'
										className='cursor-pointer'
									>
										<Button
											variant={'outline'}
											className='w-full'
										>
											View Code
											<TbBrandGithub size={24} />
										</Button>
									</a>
									<a
										href={project.liveURL}
										target='_blank'
										rel='noreferrer'
										className='cursor-pointer'
									>
										<Button className='w-full'>
											View Live
											<TbExternalLink size={24} />
										</Button>
									</a>
								</div>

								<div className='grid lg:hidden'>
									<Accordion
										type='single'
										collapsible
									>
										<AccordionItem
											value='item-1'
											className='border-none'
										>
											<AccordionTrigger className='p-0'>
												Description
											</AccordionTrigger>
											<AccordionContent>
												<div className='mt-2'>
													<p className='text-justify text-secondary-foreground'>
														{project.description}
													</p>
												</div>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</div>
							</div>
						</ShineBorder>
					</BlurFade>
				))}
			</div>
		</div>
	)
}
