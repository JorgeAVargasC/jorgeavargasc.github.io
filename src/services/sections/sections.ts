type Id =
	| 'home'
	| 'about'
	| 'projects'
	| 'experience'
	| 'education'
	| 'courses'
	| 'recommendations'

type Section = { id: Id; title: string }

export const sections: Section[] = [
	{ id: 'home', title: 'Home' },
	{ id: 'about', title: 'About' },
	{ id: 'projects', title: 'My Last Projects' },
	{ id: 'experience', title: 'Experience' },
	{ id: 'education', title: 'Education' },
	{ id: 'courses', title: 'Courses' },
	{ id: 'recommendations', title: 'Recommendations' }
]
