import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'
import { Dock, DockIcon } from '@/components/ui/dock'
import { getUserInfo } from '@/services'
import { Icons } from './icons/icons'
import {
	BriefcaseBusiness,
	CircleUserRound,
	CodeIcon,
	FileBadge2,
	GraduationCapIcon,
	HomeIcon,
	MailIcon,
	NotepadText,
	QuoteIcon
} from 'lucide-react'

const user = getUserInfo()

const DATA = {
	navbar: [
		{ href: '#banner', icon: HomeIcon, label: 'Home' },
		{ href: '#about', icon: CircleUserRound, label: 'About' },
		{ href: '#projects', icon: CodeIcon, label: 'Projects' },
		{ href: '#experience', icon: BriefcaseBusiness, label: 'Experience' },
		{ href: '#education', icon: GraduationCapIcon, label: 'Education' },
		{ href: '#courses', icon: FileBadge2, label: 'Courses' },
		{ href: '#recommendations', icon: QuoteIcon, label: 'Recommendations' }
	],
	contact: {
		social: {
			gitHub: { name: 'GitHub', url: user.links.github, icon: Icons.github },
			linkedIn: {
				name: 'LinkedIn',
				url: user.links.linkedIn,
				icon: Icons.linkedin
			},
			email: { name: 'Send Email', url: user.links.email, icon: MailIcon }
		}
	}
}

export function ContactDock() {
	const filteredSocial = Object.entries(DATA.contact.social).filter(
		([, social]) => social.url
	)

	return (
		<div className='relative'>
			<TooltipProvider>
				<Dock
					direction='middle'
					className='bg-background'
				>
					{/* Navbar Icons */}
					{DATA.navbar.map((item) => (
						<DockIcon
							key={item.label}
							className='hidden md:grid'
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href={item.href}
										aria-label={item.label}
										className={cn(
											buttonVariants({ variant: 'ghost', size: 'icon' }),
											'size-12 rounded-full'
										)}
									>
										<item.icon className='size-4' />
									</a>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					{/* Separator */}
					<div className='separator hidden h-full md:block' />
					{/* Social Icons */}
					{filteredSocial.map(([name, social]) => (
						<DockIcon key={name}>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href={social.url}
										aria-label={social.name}
										className={cn(
											buttonVariants({ variant: 'ghost', size: 'icon' }),
											'size-12 rounded-full'
										)}
										target='_blank'
										rel='noreferrer noopener'
									>
										<social.icon className='size-4' />
									</a>
								</TooltipTrigger>
								<TooltipContent>
									<p>{social.name}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					{/* CV Icon */}
					<DockIcon>
						<Tooltip>
							<TooltipTrigger asChild>
								<a
									href={user.links.cv}
									aria-label='CV'
									className={cn(
										buttonVariants({ variant: 'ghost', size: 'icon' }),
										'size-12 rounded-full'
									)}
									target='_blank'
									rel='noreferrer'
								>
									<NotepadText className='size-4' />
								</a>
							</TooltipTrigger>
							<TooltipContent>
								<p>CV</p>
							</TooltipContent>
						</Tooltip>
					</DockIcon>
				</Dock>
			</TooltipProvider>
		</div>
	)
}
