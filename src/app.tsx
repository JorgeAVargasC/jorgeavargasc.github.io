import { useEffect } from 'react'
import { ContactDock } from './components'
import BlurFade from './components/ui/blur-fade'
import { HomePage } from './pages'
import { getDelay } from './utils'
import { Button } from './components/ui/button'
import { ArrowUp } from 'lucide-react'

import bgsvg from '@/assets/background.svg'

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
		<main className='dark min-h-[100dvh] bg-background pb-20 text-foreground'>
			<div
				className='fixed left-0 top-0 z-0 grid min-h-[100vh] min-w-full place-items-center'
				// style={{
				// 	background:
				// 		'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0,0,0,0.7) 100%)'
				// }}
			>
				<img
					src={bgsvg}
					alt='bgsvg'
					className='aspect-video max-w-4xl object-cover'
				/>
			</div>
			<HomePage />

			<div className='fixed bottom-5 right-1/2 z-10 translate-x-1/2'>
				<BlurFade
					delay={getDelay(3)}
					inView
				>
					<ContactDock />
				</BlurFade>
			</div>

			<div className='fixed bottom-7 right-5'>
				<BlurFade
					delay={getDelay(3)}
					inView
				>
					<a href='#banner'>
						<Button
							variant={'default'}
							size={'icon'}
						>
							<ArrowUp />
						</Button>
					</a>
				</BlurFade>
			</div>
		</main>
	)
}
