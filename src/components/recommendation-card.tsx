import { cn } from '@/lib/utils'
import { MagicCard } from './ui/magic-card'
import { ArrowRightIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { IRecommendation } from '@/services'

export const RecommendationCard = ({
	img,
	name,
	body,
	role,
	linkedIn
}: IRecommendation) => {
	return (
		<MagicCard
			key={name}
			className={cn(
				'relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4 md:w-96',
				'dark:border-border dark:bg-card dark:hover:bg-bunker-800'
			)}
			gradientColor={''}
		>
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
				/>
				<div className='flex flex-col'>
					<div className='group flex items-center gap-1'>
						<LinkedInLogoIcon />
						<figcaption className='text-sm font-medium dark:text-card-foreground'>
							{name}
						</figcaption>
						<ArrowRightIcon className='w-0 duration-200 group-hover:w-6' />
					</div>
					<p className='text-xs font-medium dark:text-secondary-foreground'>
						{role}
					</p>
				</div>
			</a>
			<blockquote className='mt-2 text-justify text-sm'>{body[0]}</blockquote>
		</MagicCard>
	)
}
