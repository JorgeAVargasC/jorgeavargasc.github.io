import { IUser } from './interfaces'

export const getUserInfo = (): IUser => {
	const userInfo: IUser = {
		name: 'Jorge Vargas',
		image: 'https://media.licdn.com/dms/image/v2/D4E03AQEoEQKXdaI8Nw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729216713191?e=1735171200&v=beta&t=1UYXJgfOVxDi_uKhK0oseKQDQwXUZLbCgVySJupmGGE',
		country: 'Colombia',
		role: 'Full-stack Developer',
		email: 'javargas1209@gmail.com',
		phone: '+57 (314) 309-7657',
		bio: "I'm a motivated person with approximately 2 years of experience in web application development. During these last years I've been able to work on projects for the IEEE student branch of the University of Cauca, in addition, I've also been able to work as a freelance developer for some clients with specific needs. Online and continuous learning has allowed me to keep up to date with the latest front-end and back-end development technologies; thanks to my experience I've been able to improve skills such as communication, quick learning, teamwork and troubleshooting.",
		shortbio:
			'I design and develop services for clients, specializing in creating modern, elegant and interactive websites. My passion is to design creative solutions that improve the user experience.',
		projects: [
			{
				id: '1',
				name: '🐝 Beehive Management Dashboard',
				description:
					"Efficiently manage and monitor the conditions of your beehives 🐝 with this comprehensive administrative panel. Track key metrics 📊, control hive health 🌡️, and optimize your apiary's performance with real-time data 🕒. Stay connected to your bees and ensure a thriving colony! 🍯",
				githubURL: 'https://github.com/JorgeAVargasC/bee-key-frontend',
				liveURL: 'https://bee-key-frontend.vercel.app',
				imageUrl:
					'https://media.licdn.com/dms/image/v2/D4E2DAQGBv9K7k2LOZA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727727002318?e=1729926000&v=beta&t=x-f_bgsu5ginoB92Zcj68nBHpdZF8A9CHfRfV2A3C94'
			},
			{
				id: '2',
				name: '🎮 Twitch Stream Finder',
				description:
					'Discover your favorite streamers with ease and explore the hottest games right now! 🔥 This project uses the Twitch API to let you search for live streams 🎥 and get the top 20 most played games 🎮. Stay updated with the world of streaming in just a few clicks! 🌟',
				githubURL: 'https://github.com/jorgeavargasc/twitch',
				liveURL: 'https://jorgeavargasc.github.io/twitch/',
				imageUrl:
					'https://media.licdn.com/dms/image/v2/D4E2DAQFC8XJfyPLKYA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727726628852?e=1729926000&v=beta&t=WAwRrVpZVOwvumCXdLhWiVQq6sIEr3CqE1tLAuZ2Szs'
			},
			{
				id: '3',
				name: '📝 Material-UI Forms',
				description:
					'Material-UI Forms Create dynamic and responsive forms effortlessly with this intuitive form builder powered by Material-UI 🚀. Customize your forms with ease ✨, and generate clean, user-friendly interfaces for any application 📑. Start building forms faster and more efficiently!',
				githubURL: 'https://github.com/jorgeavargasc/material-ui-forms',
				liveURL: 'https://material-ui-forms.vercel.app/',
				imageUrl:
					'https://media.licdn.com/dms/image/v2/D4E2DAQE_UcPQEP_Wmw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727727238577?e=1729926000&v=beta&t=lIaKqczb4QByz0OF_ADyoYa3FUYcIQMnyOszeafJTx4'
			}
		],
		experience: [
			{
				name: 'Full-stack Developer',
				company: 'IEEE Student Branch of the University of Cauca',
				date: 'January 2020 - December 2022',
				link: 'https://drive.google.com/file/d/1asuOSelfYdDqPcB8D9GffAIqdLZnKisa/view'
			}
		],
		education: [
			{
				name: 'Electronic and Telecommunications Engineering',
				institution: 'University of Cauca',
				date: 'August 2016 - December 2022'
			}
		],
		courses: [
			{
				name: 'Diploma in Programming Skills - ICT Mission 2022',
				institution: 'National University of Colombia',
				date: 'May 2021 - December 2021',
				id: '08S1ICW43N0CI',
				link: 'https://drive.google.com/file/d/1Xktno-sLJfH3joSz3rcQZukBALpuH0xG/view'
			},
			{
				name: 'Diploma in Coding and Programming',
				institution: 'Pontifical Xaverian University and Samsung',
				date: 'September 2020 - March 2021',
				id: 'CA218708A001',
				link: 'https://wallet.xertify.co/certificates/CA218708A001'
			},
			{
				name: 'ML0101EN: Machine Learning with Python: A Practical Introduction',
				institution: 'IBM (International Business Machines)',
				date: 'August 2020',
				id: '9c5ca63de562478dbc1e37e1aa4f7a9f',
				link: 'https://courses.edx.org/certificates/9c5ca63de562478dbc1e37e1aa4f7a9f'
			},
			{
				name: 'MATLAB Fundamentals',
				institution: 'MathWorks',
				date: 'Mayo 2020',
				id: '657aab2f-f074-40be-aa0f-842dd90eabcb',
				link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=657aab2f-f074-40be-aa0f-842dd90eabcb'
			},
			{
				name: 'Scrum Fundamentals Certified',
				institution: 'SCRUMstudy - Accreditation Body for Scrum and Agile',
				date: 'September 2019',
				id: '733509',
				link: 'https://81cd1176253f3f59d435-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificates/ScrumFundamentalsCertified-JorgeAndr%C3%A9sVargasCordoba-733509.pdf'
			}
		],
		techSkills: [
			{
				category: 'Principal Stack',
				tags: ['React', 'Node.js']
			},
			{
				category: 'Front-end Technologies',
				tags: ['HTML5', 'CSS3', 'Javascript']
			},
			{
				category: 'Back-end Technologies',
				tags: ['Node.js', 'Python', 'PHP']
			},
			{
				category: 'Databases',
				tags: ['MongoDB', 'PostgreSQL', 'MySQL']
			},
			{
				category: 'Development Tools',
				tags: [
					'Git',
					'Github',
					'Bitbucket',
					'Jira',
					'Heroku',
					'Thunder Client',
					'VSCode'
				]
			},
			{
				category: 'Operating Systems',
				tags: ['Windows', 'Ubuntu', 'Android']
			},
			{
				category: 'Mockups',
				tags: ['Figma']
			}
		],
		links: {
			linkedin: 'https://www.linkedin.com/in/jorgeavargasc/',
			github: 'https://github.com/jorgeavargasc',
			portfolio: 'https://jorgeavargasc.github.io',
			email: 'mailto:javargas1209@gmail.com'
		},
		skills: [
			{
				name: 'Quick Learning',
				value: 100
			},
			{
				name: 'Troubleshooting',
				value: 100
			},
			{
				name: 'Creativity',
				value: 100
			},
			{
				name: 'Teamwork',
				value: 100
			},
			{
				name: 'Time Management',
				value: 80
			},
			{
				name: 'Organized',
				value: 80
			},
			{
				name: 'Analytical Thinking',
				value: 80
			},
			{
				name: 'Work Under Pressure',
				value: 60
			}
		],
		languages: [
			{
				name: 'Spanish',
				value: 100
			},
			{
				name: 'English',
				value: 60
			}
		],
		hobbieText:
			"I've been playing piano empirically since 2014 mainly in the urban salsa genre. Coming from a family of musicians, I consider the interpretation of the piano and music excellent activities that my parents have left me, having given me the opportunity to play in his orchestra along with well-known artists of the genre. These activities have allowed me to get out of the routine, and have helped me to improve my performance as an engineer and web developer.",
		hobbies: ['Piano']
	}

	return userInfo
}
