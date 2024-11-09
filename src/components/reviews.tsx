import { getUserInfo } from '@/services'
import Marquee from './ui/marquee'
import { ReviewCard } from './review-card'
import { LinkIcon } from 'lucide-react'
import BlurFade from './ui/blur-fade'
import { getDelay } from '@/utils'

export const Reviews = () => {
	const { reviews } = getUserInfo()

	const firstRow = reviews.slice(0, reviews.length / 2)
	const secondRow = reviews.slice(reviews.length / 2)

	return (
		<div className='grid gap-5'>
			<a
				href='#reviews'
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
					<h2>Reviews</h2>
				</BlurFade>
			</a>

			<div className='relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl'>
				<Marquee
					pauseOnHover
					className='[--duration:20s]'
				>
					{firstRow.map((review) => (
						<ReviewCard
							key={review.username}
							{...review}
						/>
					))}
				</Marquee>
				<Marquee
					reverse
					pauseOnHover
					className='[--duration:20s]'
				>
					{secondRow.map((review) => (
						<ReviewCard
							key={review.username}
							{...review}
						/>
					))}
				</Marquee>
				<div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
				<div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
			</div>
		</div>
	)
}
