import { ContactForm } from './components'
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-start justify-between bg-black p-12 text-white'>
      <ContactForm />
    </main>
  )
}
