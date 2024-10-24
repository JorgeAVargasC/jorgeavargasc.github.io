import { getUserInfo } from '@/services'
import { BriefcaseBusiness, LinkIcon } from 'lucide-react'
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
						link={experience.companyLink}
						linkLabel={experience.company}
						title={experience.name}
						icon={<BriefcaseBusiness size={18} />}
					/>
				))}
			</div>
		</div>
	)
}
