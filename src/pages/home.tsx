import { Banner, Projects } from '../components'
export const HomePage = () => {
	return (
		<div className='mx-auto max-w-5xl px-5'>
			<section id='banner'>
				<Banner />
			</section>

			<section id='projects'>
				<Projects />
			</section>
		</div>
	)
}
