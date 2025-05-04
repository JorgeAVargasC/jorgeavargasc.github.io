import { TechStackEnum } from '../../domain/enums/tech-stack.enum'
import type { IProject } from '../../domain/interfaces/project.interface'

export const projects: IProject[] = [
	{
		id: '1',
		name: '🚀 QR Code | 📲 Generator ⚡',
		description:
			'🎨✨ Create unique and customizable QR codes with a generator that lets you adjust colors, shapes, and styles to match any brand or design. 🔗📱 Scan effortlessly and turn every code into a visually appealing and functional experience. Transform any link into a QR code masterpiece! 🚀🔍',
		githubURL: 'https://github.com/JorgeAVargasC/qr-code-generator',
		liveURL: 'https://javc-qr-code-generator.vercel.app',
		imageUrl: '/images/projects/1.webp',
		techStack: [
			TechStackEnum.REACT,
			TechStackEnum.TYPESCRIPT,
			TechStackEnum.TAILWIND_V4
		]
	},
	{
		id: '2',
		name: '👨‍💻 Developer Portfolio',
		description:
			'🚀 Discover the portfolio of Jorge Vargas, a frontend developer specializing in React and TypeScript. 💻 Explore his projects and reach out for future collaborations! 🤝',
		githubURL: 'https://github.com/JorgeAVargasC/jorgeavargasc.github.io',
		liveURL: 'https://jorgeavargasc.github.io',
		imageUrl: '/images/projects/2.webp',
		techStack: [
			TechStackEnum.ASTRO,
			TechStackEnum.TYPESCRIPT,
			TechStackEnum.TAILWIND_V4
		]
	},
	{
		id: '3',
		name: '🌎 Bio Sphere!',
		description:
			'Efficiently monitor and manage environmental conditions 🌿 with this powerful dashboard. Track key metrics like air quality 🌬️, temperature 🌡️, humidity 💧, and more — all in real-time 📊. Stay connected to your stations and ensure optimal conditions for your surroundings! 🌎',
		githubURL: 'https://github.com/jorgeavargasc/bio-sphere-frontend',
		liveURL: 'https://bio-sphere-frontend.vercel.app/',
		imageUrl: '/images/projects/3.webp',
		techStack: [
			TechStackEnum.REACT,
			TechStackEnum.TYPESCRIPT,
			TechStackEnum.TAILWIND,
			TechStackEnum.HERO_UI
		]
	},
	{
		id: '4',
		name: '📝 Material-UI Forms',
		description:
			'Material-UI Forms Create dynamic and responsive forms effortlessly with this intuitive form builder powered by Material-UI 🚀. Customize your forms with ease ✨, and generate clean, user-friendly interfaces for any application 📑. Start building forms faster and more efficiently!',
		githubURL: 'https://github.com/jorgeavargasc/material-ui-forms',
		liveURL: 'https://material-ui-forms.vercel.app/',
		imageUrl: '/images/projects/4.webp',
		techStack: [
			TechStackEnum.REACT,
			TechStackEnum.TYPESCRIPT,
			TechStackEnum.TAILWIND,
			TechStackEnum.MUI
		]
	}
]
