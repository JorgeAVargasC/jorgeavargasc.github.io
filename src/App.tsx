import '@/styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Recommendations } from '@/components/sections/Recommendations'
import { Education } from '@/components/sections/Education'
import { Courses } from '@/components/sections/Courses'
import { user } from '@/data/portfolio'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero general={user.general} links={user.links} />
        <Experience experience={user.experience} />
        <Projects projects={user.projects} />
        <Recommendations recommendations={user.recommendations} />
        <Education education={user.education} />
        <Courses courses={user.courses} />
      </main>

      <footer className="border-border text-text-muted border-t py-8 text-center text-xs">
        <p>
          Built with React + Vite + Motion —{' '}
          <span className="aurora-text font-medium">{user.general.name}</span> ©{' '}
          {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
