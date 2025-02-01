import { useEffect } from 'react'
import { ContactDock } from './components'
import BlurFade from './components/ui/blur-fade'
import { HomePage } from './pages'
import { getDelay } from './utils'
import { Button } from './components/ui/button'
import { ArrowUp } from 'lucide-react'
import Particles from './components/ui/particles'
import ScrollProgress from './components/ui/scroll-progress'

export default function App() {
	useEffect(() => {
		const scrollToHash = () => {
			const hash = window.location.hash
			if (hash) {
				const element = document.querySelector(hash)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			}
		}

		const timeout = setTimeout(scrollToHash, 1600)

		return () => clearTimeout(timeout)
	}, [])

	return (
		<main className='dark min-h-[100dvh] bg-background pb-20 text-foreground'>
			<ScrollProgress className='top-0 bg-gradient-to-r from-sky-400 via-sky-500 to-green-400' />
			<div className='fixed left-0 top-0 z-0 grid min-h-[100vh] min-w-full place-items-center'>
				<Particles
					className='absolute inset-0'
					quantity={100}
					ease={80}
					color={'#FFF'}
					refresh
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
					<a
						href='#banner'
						aria-label='Back to top'
					>
						<Button
							aria-label='Back to top'
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
