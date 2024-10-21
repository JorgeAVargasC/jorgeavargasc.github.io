import { Banner, Projects } from '../components'
export const HomePage = () => {
	return (
		<div className='mx-auto max-w-5xl px-5'>
			<section
				id='banner'
				className='grid min-h-screen'
			>
				<Banner />
			</section>

			<section
				id='projects'
				className='grid min-h-screen'
			>
				<Projects />
			</section>
		</div>
	)
}
