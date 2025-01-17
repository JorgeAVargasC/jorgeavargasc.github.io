import { format } from '@formkit/tempo'
import { ExternalLinkIcon } from 'lucide-react'
import React from 'react'
import { Button } from './button'

type Props = {
	from: string | null
	to: string | null
	title: string
	subtitle?: string
	link?: string | null
	linkLabel?: string | null
	icon?: React.ReactNode
	description?: string
}

export const TimelineItem: React.FC<Props> = ({
	from,
	link,
	linkLabel,
	subtitle,
	title,
	to,
	icon
}) => {
	const getDateLabel = () => {
		if (from && to) {
			return `${format(from, 'MMM, YYYY', 'en')} - ${format(to, 'MMM, YYYY', 'en')}`
		}

		if (from) {
			return `${format(from, 'MMM, YYYY', 'en')} - Present`
		}

		if (to) {
			return `${format(to, 'MMM, YYYY', 'en')}`
		}

		return ''
	}

	return (
		<div className='flex gap-x-2'>
			<div className='relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-secondary-foreground last:after:hidden'>
				<div className='relative z-10 flex size-7 items-center justify-center'>
					<div className='size-2 rounded-full bg-secondary-foreground'></div>
				</div>
			</div>

			<div className='grid gap-1 pb-6'>
				<h6 className='flex h-7 items-center leading-none text-secondary-foreground'>
					{getDateLabel()}
				</h6>

				<h5 className='flex gap-x-1.5 text-start'>
					{icon && <div className='min-w-5'>{icon}</div>}
					{title}
				</h5>
				{subtitle && (
					<p className='text-justify text-sm text-secondary-foreground'>
						{subtitle}
					</p>
				)}

				{link && linkLabel && (
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
					>
						<Button
							size={'sm'}
							variant={'outline'}
						>
							<div className='grid'>
								<small className='truncate'>{linkLabel}</small>
							</div>
							<ExternalLinkIcon size={14} />
						</Button>
					</a>
				)}
			</div>
		</div>
	)
}
