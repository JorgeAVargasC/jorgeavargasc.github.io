import { CodeIcon, HomeIcon, MailIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'
import { Dock, DockIcon } from '@/components/ui/dock'
import { getUserInfo } from '@/services'
import { Icons } from './icons/icons'

const user = getUserInfo()

const DATA = {
	navbar: [
		{ href: '#banner', icon: HomeIcon, label: 'Home' },
		{ href: '#projects', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		social: {
			GitHub: {
				name: 'GitHub',
				url: user.links.github,
				icon: Icons.github
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: user.links.linkedin,
				icon: Icons.linkedin
			},
			email: {
				name: 'Send Email',
				url: user.links.email,
				icon: MailIcon
			}
		}
	}
}

export function ContactDock() {
	return (
		<div className='relative'>
			<TooltipProvider>
				<Dock
					direction='middle'
					className='bg-background'
				>
					{DATA.navbar.map((item) => (
						<DockIcon key={item.label}>
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
					<Separator
						orientation='vertical'
						className='h-full'
					/>
					{Object.entries(DATA.contact.social).map(([name, social]) => (
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
										rel='noreferrer'
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
				</Dock>
			</TooltipProvider>
		</div>
	)
}
