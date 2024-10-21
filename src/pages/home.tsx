import { Banner, Courses, Experience, Projects } from '../components'
export const HomePage = () => {
	return (
		<div className='mx-auto grid max-w-5xl gap-5 px-5'>
			<section
				id='banner'
				className='grid min-h-screen'
			>
				<Banner />
			</section>

			<section
				id='projects'
				className='grid py-8'
			>
				<Projects />
			</section>

			<section
				id='experience'
				className='grid py-8'
			>
				<Experience />
			</section>

			<section
				id='courses'
				className='grid py-8'
			>
				<Courses />
			</section>
		</div>
	)
}
