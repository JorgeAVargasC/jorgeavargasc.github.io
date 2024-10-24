import { getUserInfo } from '@/services'
import { BookTextIcon, LinkIcon } from 'lucide-react'
import { TimelineItem } from './ui/timeline-item'
import { useState } from 'react'
import { Button } from './ui/button'
import { IUser } from '@/services/get-user-info/interfaces'

export const Courses = () => {
	const user = getUserInfo()

	const [showMore, setShowMore] = useState(false)

	const l = 3
	const firstCourses = user.courses.slice(0, l)
	const restCourses = user.courses.slice(l)

	const renderCourse = (course: IUser['courses'][0]) => {
		return (
			<TimelineItem
				key={course.name}
				from={course.from}
				to={course.to}
				link={course.link}
				linkLabel={'View Certificate'}
				title={course.name}
				subtitle={course.institution}
				icon={<BookTextIcon size={18} />}
			/>
		)
	}

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
				{firstCourses.map((course) => renderCourse(course))}

				{showMore && restCourses.map((course) => renderCourse(course))}

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
