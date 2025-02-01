import { cn } from '@/lib/utils'
import { MagicCard } from './ui/magic-card'
import { ArrowRightIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { IRecommendation } from '@/services'
import { Button } from './ui/button'
import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTrigger
} from './ui/drawer'
import clsx from 'clsx'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'

export const RecommendationCard = ({
	img,
	name,
	body,
	role,
	linkedIn
}: IRecommendation) => {
	const renderUser = () => {
		return (
			<a
				href={linkedIn || '#recommendations'}
				className='flex flex-row items-center gap-2'
			>
				<img
					className='rounded-full'
					width='48'
					height='48'
					alt={name}
					src={img}
					loading='lazy'
				/>
				<div className='flex flex-col'>
					<div className='group flex items-center gap-1'>
						<LinkedInLogoIcon />
						<figcaption className='text-sm font-medium text-card-foreground'>
							{name}
						</figcaption>
						<ArrowRightIcon className='w-0 duration-200 group-hover:w-6' />
					</div>
					<p className='line-clamp-2 text-start text-xs font-medium text-secondary-foreground'>
						{role}
					</p>
				</div>
			</a>
		)
	}

	return (
		<>
			<MagicCard
				key={name}
				className={cn(
					'relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4 md:w-96',
					'dark:border-border dark:bg-card dark:hover:bg-bunker-800'
				)}
				gradientColor={''}
			>
				<div className='flex h-full w-full min-w-full flex-col gap-2'>
					{renderUser()}

					<div className='min-w-full flex-1'>
						<blockquote
							className={clsx(
								'text-justify text-sm',
								body.length > 1 && 'line-clamp-4'
							)}
						>
							{body[0]}
						</blockquote>
					</div>

					{body.length > 1 && (
						<Drawer>
							<DrawerTrigger asChild>
								<Button
									size={'sm'}
									className='w-full'
									variant='outline'
								>
									See More
								</Button>
							</DrawerTrigger>
							<DrawerContent>
								<div className='mx-auto w-full max-w-xl'>
									<DrawerHeader>
										<DialogTitle className='px-2'>{renderUser()}</DialogTitle>
										<DialogDescription></DialogDescription>
									</DrawerHeader>
									<DrawerFooter>
										<div className='scrollbar grid max-h-[40vh] gap-5 overflow-y-auto px-2'>
											{body.map((item, index) => (
												<blockquote
													key={index}
													className='text-justify text-sm'
												>
													{item}
												</blockquote>
											))}
										</div>
									</DrawerFooter>
								</div>
							</DrawerContent>
						</Drawer>
					)}
				</div>
			</MagicCard>
		</>
	)
}
