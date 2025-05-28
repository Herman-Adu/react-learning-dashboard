'use client'

import data from '@/data/data.json'
import tabs from '@/data/tabs.json'
import projectData from '@/data/projectData.json'

import { AnimatedTabs } from '@/components/animated-tabs'
import { DataTable } from '@/components/dashboard/data-table'

import { ProjectCard } from '@/components/dashboard/project-card'
import Heading from '@/components/heading'
import { DashboardSectionHeader } from '@/components/dashboard/dashboard-section-header'

/* const tabs = [
  { label: 'Home', value: 'home' },
  { label: 'About', value: 'about' },
  { label: 'Contact', value: 'contact' }
  { label: 'Danger Zone', value: 'danger-zone' }
] */

/* const projectData = [
  {
    title: 'Herman Adu',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    imageUrl:
      'https://images.unsplash.com/photo-1604278666650-0f3eab3c6644?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorImage: 'https://avatars.githubusercontent.com/u/52298886?v=4',
    authorName: 'Herman',
    id: '1',
    createdAt: 'May 20, 2025',
    authorId: 'kp_9ceccdf193e746f999f7cd1c342075d7',
    updatedAt: 'May 20, 2025'
  },
  {
    title: 'Herman Adu',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    imageUrl:
      'https://images.unsplash.com/photo-1604278666650-0f3eab3c6644?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorImage: 'https://avatars.githubusercontent.com/u/52298886?v=4',
    authorName: 'Herman',
    id: '2',
    createdAt: 'May 20, 2025',
    authorId: 'kp_9ceccdf193e746f999f7cd1c342075d7',
    updatedAt: 'May 20, 2025'
  },
  {
    title: 'Herman Adu',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    imageUrl:
      'https://images.unsplash.com/photo-1604278666650-0f3eab3c6644?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorImage: 'https://avatars.githubusercontent.com/u/52298886?v=4',
    authorName: 'Herman',
    id: '3',
    createdAt: 'May 20, 2025',
    authorId: 'kp_9ceccdf193e746f999f7cd1c342075d7',
    updatedAt: 'May 20, 2025'
  },
  {
    title: 'Herman Adu',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    imageUrl:
      'https://images.unsplash.com/photo-1604278666650-0f3eab3c6644?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    authorImage: 'https://avatars.githubusercontent.com/u/52298886?v=4',
    authorName: 'Herman',
    id: '4',
    createdAt: 'May 20, 2025',
    authorId: 'kp_9ceccdf193e746f999f7cd1c342075d7',
    updatedAt: 'May 20, 2025'
  }
] */

export default function ReactDashboard() {
  return (
    <>
      <Heading
        title='React Dashboard'
        description="Welcome back!, Here's the recent activity for this learning app"
      />

      <div className='flex min-h-screen flex-1 flex-col gap-4 p-4'>
        <div className='w-full'>
          <AnimatedTabs tabs={tabs} />
        </div>

        {/* Recent Activity section */}
        <div className='mt-7 flex-1 rounded-xl bg-muted/50 pb-8'>
          <div className='mt-7'>
            <DashboardSectionHeader
              title='Recent Activity'
              description="Welcome back!, Here's the recent activity that has taken place on this Learning Platform 
                app"
            />

            <div className='space-y-3 px-6 pt-2'>
              <div className='flex items-center gap-3 rounded-lg bg-white p-3 dark:bg-zinc-800'>
                <div className='h-2 w-2 rounded-full bg-blue-500'></div>
                <p className='text-sm'>
                  Refactored animated tabs, added about & contact tabs - updated
                  2 hours ago
                </p>
              </div>

              <div className='flex items-center gap-3 rounded-lg bg-white p-3 dark:bg-zinc-800'>
                <div className='h-2 w-2 rounded-full bg-blue-500'></div>
                <p className='text-sm'>
                  Added react advance concepts to the platform - updated 1 days
                  ago
                </p>
              </div>

              <div className='flex items-center gap-3 rounded-lg bg-white p-3 dark:bg-zinc-800'>
                <div className='h-2 w-2 rounded-full bg-green-500'></div>
                <p className='text-sm'>
                  UseEffect Tutorial was updated 2 days ago
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks section */}
        <div className='mt-7 flex-1 rounded-xl bg-muted/50 pt-6'>
          <DashboardSectionHeader
            title='Tasks'
            description='Welcome back!, Here is the recent activity applied to the react learning platform.
              app'
          />

          <DataTable data={data} />
        </div>

        {/* Project cards section */}
        <div className='mt-7 flex-1 rounded-xl bg-muted/50 pb-8 pt-7'>
          <DashboardSectionHeader
            title='Tasks'
            description='Welcome back!, Here is the recent activity applied to the react learning platform.
              app'
          />

          <div className='grid auto-rows-min gap-8 px-6 lg:grid-cols-2 xl:grid-cols-3'>
            {projectData.map((project, index) => (
              <ProjectCard data={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
