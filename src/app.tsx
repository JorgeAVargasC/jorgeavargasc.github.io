import { NextUIProvider } from '@nextui-org/react'
import { HomePage } from './pages'

export default function App() {
	return (
		<NextUIProvider>
			<main className='text-foreground bg-background dark min-h-screen'>
				<HomePage />
			</main>
		</NextUIProvider>
	)
}
