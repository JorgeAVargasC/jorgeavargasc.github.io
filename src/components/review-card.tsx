import { cn } from '@/lib/utils'
import { Review } from '@/services/get-user-info/interfaces'
import { MagicCard } from './ui/magic-card'

export const ReviewCard = ({ img, name, username, body }: Review) => {
	return (
		<MagicCard
			className={cn(
				'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
				'dark:border-border dark:bg-card dark:hover:bg-bunker-800'
			)}
			gradientColor={''}
		>
			<div className='flex flex-row items-center gap-2'>
				<img
					className='rounded-full'
					width='32'
					height='32'
					alt={name}
					src={img}
				/>
				<div className='flex flex-col'>
					<figcaption className='text-sm font-medium dark:text-card-foreground'>
						{name}
					</figcaption>
					<p className='text-xs font-medium dark:text-secondary-foreground'>
						{username}
					</p>
				</div>
			</div>
			<blockquote className='mt-2 text-sm'>{body}</blockquote>
		</MagicCard>
	)
}
