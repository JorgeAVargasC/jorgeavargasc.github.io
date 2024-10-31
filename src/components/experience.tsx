import { getUserInfo } from '@/services'
import { BriefcaseBusiness, LinkIcon } from 'lucide-react'
import { TimelineItem } from './ui/timeline-item'
import BlurFade from './ui/blur-fade'
import { getDelay } from '@/utils'

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
				<BlurFade
					delay={getDelay(0)}
					inView
				>
					<h2>Experience</h2>
				</BlurFade>
			</a>

			<div>
				{user.experience.map((experience) => (
					<BlurFade
						delay={getDelay(0)}
						key={experience.name}
						inView
					>
						<TimelineItem
							from={experience.from}
							to={experience.to}
							link={experience.companyLink}
							linkLabel={experience.company}
							title={experience.name}
							icon={<BriefcaseBusiness size={18} />}
						/>
					</BlurFade>
				))}
			</div>
		</div>
	)
}
