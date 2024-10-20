import { ContactDock } from './components'
import { HomePage } from './pages'

export default function App() {
	return (
		<main className='dark min-h-[100dvh] pb-36 bg-background text-foreground'>
			<HomePage />

			<div className='fixed z-10 bottom-5 translate-x-1/2 right-1/2'>
				<ContactDock />
			</div>
		</main>
	)
}
