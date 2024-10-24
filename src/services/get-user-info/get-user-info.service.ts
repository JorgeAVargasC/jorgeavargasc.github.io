import { IUser } from './interfaces'

export const getUserInfo = (): IUser => {
	const userInfo: IUser = {
		name: 'Jorge Vargas',
		image:
			'https://media.licdn.com/dms/image/v2/D4E03AQEoEQKXdaI8Nw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729216713191?e=1735171200&v=beta&t=1UYXJgfOVxDi_uKhK0oseKQDQwXUZLbCgVySJupmGGE',
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
				imageUrl: '/images/projects/1.webp'
			},
			{
				id: '2',
				name: '🎮 Twitch Stream Finder',
				description:
					'Discover your favorite streamers with ease and explore the hottest games right now! 🔥 This project uses the Twitch API to let you search for live streams 🎥 and get the top 20 most played games 🎮. Stay updated with the world of streaming in just a few clicks! 🌟',
				githubURL: 'https://github.com/jorgeavargasc/twitch',
				liveURL: 'https://jorgeavargasc.github.io/twitch/',
				imageUrl: '/images/projects/2.webp'
			},
			{
				id: '3',
				name: '📝 Material-UI Forms',
				description:
					'Material-UI Forms Create dynamic and responsive forms effortlessly with this intuitive form builder powered by Material-UI 🚀. Customize your forms with ease ✨, and generate clean, user-friendly interfaces for any application 📑. Start building forms faster and more efficiently!',
				githubURL: 'https://github.com/jorgeavargasc/material-ui-forms',
				liveURL: 'https://material-ui-forms.vercel.app/',
				imageUrl: '/images/projects/3.webp'
			}
		],
		experience: [
			{
				name: 'Frontend Developer',
				company: 'BPO Labs Solutions',
				from: '2022-10-11',
				to: null,
				companyLink: 'https://www.linkedin.com/company/bpolabs',
				description: ''
			},
			{
				name: 'Full-stack Developer',
				company: 'IEEE Student Branch of the University of Cauca',
				from: '2020-01-01',
				to: '2022-12-31',
				companyLink: 'https://www.linkedin.com/company/ieee-unicauca',
				description: ''
			}
		],
		education: [
			{
				name: 'Electronic and Telecommunications Engineering',
				institution: 'Universidad del Cauca',
				companyLink: 'https://www.linkedin.com/school/universidad-del-cauca/',
				from: '2016-08-01',
				to: '2024-03-14'
			}
		],
		courses: [
			{
				name: 'Shadcn/ui: Componentes accesibles y personalizables',
				institution: 'DevTalles',
				from: null,
				to: '2024-09-30',
				id: 'fh6nrxrewu',
				link: 'https://cursos.devtalles.com/certificates/fh6nrxrewu'
			},
			{
				name: 'Nest: Desarrollo backend escalable con Node',
				institution: 'DevTalles',
				from: null,
				to: '2024-09-30',
				id: 'khlt8y6dao',
				link: 'https://cursos.devtalles.com/certificates/khlt8y6dao'
			},
			{
				name: 'Zustand: Gestor de estado para React',
				institution: 'DevTalles',
				from: null,
				to: '2024-08-31',
				id: 'sp9fz6mo25',
				link: 'https://cursos.devtalles.com/certificates/sp9fz6mo25'
			},
			{
				name: 'TanStack Query - Un poderoso gestor de estado asíncrono',
				institution: 'DevTalles',
				from: null,
				to: '2024-07-31',
				id: 'xckm1vb2su',
				link: 'https://cursos.devtalles.com/certificates/xckm1vb2su'
			},
			{
				name: 'React PRO: Lleva tus bases al siguiente nivel',
				institution: 'DevTalles',
				from: null,
				to: '2024-07-31',
				id: 'osy6ls6h6q',
				link: 'https://cursos.devtalles.com/certificates/osy6ls6h6q'
			},
			{
				name: 'NestJS + Microservicios: Aplicaciones escalables y modulares',
				institution: 'DevTalles',
				from: null,
				to: '2024-05-31',
				id: 'daosy1j9jf',
				link: 'https://cursos.devtalles.com/certificates/daosy1j9jf'
			},
			{
				name: 'Next.js: El framework de React para producción',
				institution: 'Udemy',
				from: null,
				to: '2024-01-31',
				id: 'UC-b9645672-adae-4aa1-baf2-a259c7ce1f8e',
				link: 'https://www.udemy.com/certificate/UC-b9645672-adae-4aa1-baf2-a259c7ce1f8e/'
			},
			{
				name: 'React: De cero a experto (Hooks y MERN)',
				institution: 'Udemy',
				from: null,
				to: '2024-01-31',
				id: 'UC-2bd05b3c-74cf-4e9d-84c7-00db5a573a22',
				link: 'https://www.udemy.com/certificate/UC-2bd05b3c-74cf-4e9d-84c7-00db5a573a22/'
			},
			{
				name: 'PROGRAMA DE FORMACIÓN BÁSICO (CICLO 1, 2 Y 3) EN HABILIDADES DE PROGRAMACIÓN DE MISIÓN TIC 2022',
				institution: 'Universidad Nacional de Colombia',
				from: '2021-12-01',
				to: '2021-12-31',
				id: 'N0IPNP8KPKEIQ',
				link: 'https://hermesextension.unal.edu.co/ords/f?p=116:44:7595308990382::::P44_ID_CERTIFICADO,P44_TIPO_CERTIFICADO,P44_CODIGO_VERIFICACION,P44_IDENTIFICACION:509204,ALUMNO,,'
			},
			{
				name: 'CODIFICACIÓN Y PROGRAMACIÓN',
				institution:
					'Pontificia Universidad Javeriana / Samsung Innovation Campus',
				from: '2021-03-01',
				to: '2021-03-31',
				id: 'CA218708A001',
				link: 'https://wallet.xertify.co/certificates/CA218708A001'
			},
			{
				name: 'ML0101EN: Machine Learning with Python: A Practical Introduction',
				institution: 'IBM',
				from: null,
				to: '2020-08-31',
				id: '9c5ca63de562478dbc1e37e1aa4f7a9f',
				link: 'https://courses.edx.org/certificates/9c5ca63de562478dbc1e37e1aa4f7a9f'
			},
			{
				name: 'MATLAB Fundamentals',
				institution: 'MathWorks',
				from: null,
				to: '2020-05-31',
				id: '657aab2f-f074-40be-aa0f-842dd90eabcb',
				link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=657aab2f-f074-40be-aa0f-842dd90eabcb'
			},
			{
				name: 'Scrum Fundamentals Certified (SFC)',
				institution: 'SCRUMstudy - Accreditation Body for Scrum and Agile',
				from: null,
				to: '2019-09-30',
				id: '733509',
				link: 'http://81cd1176253f3f59d435-ac22991740ab4ff17e21daf2ed577041.r77.cf1.rackcdn.com/Certificates/ScrumFundamentalsCertified-JorgeAndr%C3%A9sVargasCordoba-733509.pdf'
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
			email: 'mailto:javargas1209@gmail.com',
			cv: 'https://drive.google.com/drive/folders/1_VxKkbBV0Tu3WC7M4at8GqH_gPMG9i-8?usp=drive_link'
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
		]
	}

	return userInfo
}
