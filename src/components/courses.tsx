import { getUserInfo } from '@/services'
import { BookTextIcon, LinkIcon } from 'lucide-react'
import { TimelineItem } from './ui/timeline-item'

export const Courses = () => {
	const user = getUserInfo()

	return (
		<div className='flex flex-col gap-5'>
			<a
				href='#courses'
				className='group flex flex-row items-center'
			>
				<LinkIcon
					size={18}
					className='w-0 duration-200 group-hover:w-6'
				/>
				<h2>Courses</h2>
			</a>
			<div>
				{user.courses.map((course) => (
					<TimelineItem
						key={course.name}
						from={course.from}
						to={course.to}
						link={course.link}
						linkLabel={course.id}
						title={course.name}
						subtitle={course.institution}
						icon={<BookTextIcon size={18} />}
					/>
				))}
			</div>
		</div>
	)
}
