import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MeApp from './me-app.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MeApp />
	</StrictMode>
)
