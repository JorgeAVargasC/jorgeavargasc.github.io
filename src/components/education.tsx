import { getUserInfo } from '@/services'
import { GraduationCap, LinkIcon } from 'lucide-react'
import { TimelineItem } from './ui/timeline-item'

export const Education = () => {
	const user = getUserInfo()

	return (
		<div className='flex flex-col gap-5'>
			<a
				href='#education'
				className='group flex flex-row items-center'
			>
				<LinkIcon
					size={18}
					className='w-0 duration-200 group-hover:w-6'
				/>
				<h2>Education</h2>
			</a>

			<div>
				{user.education.map((education) => (
					<TimelineItem
						key={education.name}
						from={education.from}
						to={education.to}
						link={education.companyLink}
						linkLabel={education.institution}
						title={education.name}
						icon={<GraduationCap size={18} />}
					/>
				))}
			</div>
		</div>
	)
}
