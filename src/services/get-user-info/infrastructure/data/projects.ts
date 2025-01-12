import { TechStackEnum } from '../../domain/enums'
import { IProject } from '../../domain/interfaces'

export const projects: IProject[] = [
	{
		id: '1',
		name: '🐝 Beehive Management Dashboard',
		description:
			"Efficiently manage and monitor the conditions of your beehives 🐝 with this comprehensive administrative panel. Track key metrics 📊, control hive health 🌡️, and optimize your apiary's performance with real-time data 🕒. Stay connected to your bees and ensure a thriving colony! 🍯",
		githubURL: 'https://github.com/JorgeAVargasC/bee-key-frontend',
		liveURL: 'https://bee-key-frontend.vercel.app',
		imageUrl: '/images/projects/1.webp',
		techStack: [
			TechStackEnum.REACT,
			TechStackEnum.FIREBASE,
			TechStackEnum.TYPESCRIPT,
			TechStackEnum.TAILWIND,
			TechStackEnum.NEXT_UI
		]
	},
	{
		id: '2',
		name: '🎮 Twitch Stream Finder',
		description:
			'Discover your favorite streamers with ease and explore the hottest games right now! 🔥 This project uses the Twitch API to let you search for live streams 🎥 and get the top 20 most played games 🎮. Stay updated with the world of streaming in just a few clicks! 🌟',
		githubURL: 'https://github.com/jorgeavargasc/twitch',
		liveURL: 'https://jorgeavargasc.github.io/twitch/',
		imageUrl: '/images/projects/2.webp',
		techStack: [
			TechStackEnum.REACT,
			TechStackEnum.TYPESCRIPT,
			TechStackEnum.TAILWIND,
			TechStackEnum.NEXT_UI
		]
	},
	{
		id: '3',
		name: '📝 Material-UI Forms',
		description:
			'Material-UI Forms Create dynamic and responsive forms effortlessly with this intuitive form builder powered by Material-UI 🚀. Customize your forms with ease ✨, and generate clean, user-friendly interfaces for any application 📑. Start building forms faster and more efficiently!',
		githubURL: 'https://github.com/jorgeavargasc/material-ui-forms',
		liveURL: 'https://material-ui-forms.vercel.app/',
		imageUrl: '/images/projects/3.webp',
		techStack: [
			TechStackEnum.REACT,
			TechStackEnum.TYPESCRIPT,
			TechStackEnum.TAILWIND,
			TechStackEnum.NEXT_UI
		]
	}
]
