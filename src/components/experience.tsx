import { getUserInfo } from '@/services'
import { BookTextIcon, LinkIcon } from 'lucide-react'
import { TimelineItem } from './ui/timeline-item'

export const Experience = () => {
	const user = getUserInfo()

	return (
		<div className='flex flex-col gap-5'>
			<a
				href='#experience'
				className='group flex flex-row items-center'
			>
				<LinkIcon
					size={18}
					className='w-0 duration-200 group-hover:w-6'
				/>
				<h2>Experience</h2>
			</a>

			<div>
				{user.experience.map((experience) => (
					<TimelineItem
						key={experience.name}
						from={experience.from}
						to={experience.to}
						link={experience.link}
						linkLabel={'View Certificate'}
						title={experience.name}
						subtitle={experience.company}
						icon={<BookTextIcon size={18} />}
					/>
				))}
			</div>
		</div>
	)
}
