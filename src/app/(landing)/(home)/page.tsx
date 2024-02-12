import { Suspense } from 'react'
import { Banner, BannerSkeleton } from './components'

export default async function Home() {
  return (
    <Suspense fallback={<BannerSkeleton />}>
      <Banner />
    </Suspense>
  )
}
