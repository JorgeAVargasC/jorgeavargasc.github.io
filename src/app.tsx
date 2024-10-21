import { useEffect } from 'react'
import { ContactDock } from './components'
import BlurFade from './components/ui/blur-fade'
import { HomePage } from './pages'
import { getDelay } from './utils'

export default function App() {
	useEffect(() => {
		const hash = window.location.hash
		if (hash) {
			const element = document.querySelector(hash)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [])

	return (
		<main className='dark min-h-[100dvh] bg-background pb-36 text-foreground'>
			<HomePage />

			<div className='fixed bottom-5 right-1/2 z-10 translate-x-1/2'>
				<BlurFade
					delay={getDelay(3)}
					inView
				>
					<ContactDock />
				</BlurFade>
			</div>
		</main>
	)
}
