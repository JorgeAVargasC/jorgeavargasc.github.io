'use client'
import { Skeleton } from '@nextui-org/react'

export const BannerSkeleton = () => {
  return (
    <div className='flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-5 md:flex-row md:justify-between'>
      <div className='grid place-items-center gap-2'>
        <Skeleton className='h-10 w-64 rounded-md' />
        <Skeleton className='h-10 w-60 rounded-md' />
      </div>
      <Skeleton className='h-[340px] w-[300px] rounded-md' />
    </div>
  )
}
