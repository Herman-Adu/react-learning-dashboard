//import React from 'react'
import { Separator } from '../ui/separator'

interface DashboardHeaderProps {
  title: string
  description: string
}

export function DashboardSectionHeader({
  title,
  description
}: DashboardHeaderProps) {
  return (
    <div className='ml-6 space-y-0.5'>
      <h3 className='pb-2 text-xl font-semibold tracking-tight lg:text-2xl'>
        {title}
      </h3>

      <p className='text-muted-foreground'>{description}</p>

      <div className='mt-4'>
        <Separator className='my-6' />
      </div>
    </div>
  )
}
