import { getUserInfo } from '@/services'
import { LinkIcon } from 'lucide-react'
import { TimelineItem } from './ui/timeline-item'
import { useState } from 'react'
import { Button } from './ui/button'

export const Courses = () => {
	const user = getUserInfo()

	const [showMore, setShowMore] = useState(false)

	const firstFiveCourses = user.courses.slice(0, 5)
	const restCourses = user.courses.slice(5)

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
				{firstFiveCourses.map((course) => (
					<TimelineItem
						key={course.name}
						from={course.from}
						to={course.to}
						link={course.link}
						linkLabel={course.id}
						title={course.name}
						subtitle={course.institution}
					/>
				))}

				{showMore &&
					restCourses.map((course) => (
						<TimelineItem
							key={course.name}
							from={course.from}
							to={course.to}
							link={course.link}
							linkLabel={course.id}
							title={course.name}
							subtitle={course.institution}
						/>
					))}

				{restCourses.length > 0 && (
					<Button
						className='mt-4'
						onClick={() => setShowMore(!showMore)}
						variant={'outline'}
					>
						{showMore ? 'Show Less' : `Show ${restCourses.length} More`}
					</Button>
				)}
			</div>
		</div>
	)
}
