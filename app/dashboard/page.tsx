import { AnimatedTabs } from '@/components/animated-tabs'
import { DataTable } from '@/components/dashboard/data-table'
import Heading from '@/components/heading'

import data from '@/data/data.json'
import { Separator } from '@/components/ui/separator'

const tabs = [
  { label: 'Home', value: 'home' },
  { label: 'About', value: 'about' },
  { label: 'Contact', value: 'contact' },
  { label: 'Danger Zone', value: 'danger-zone' }
]

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

        <div className='mt-7 flex-1 rounded-xl bg-muted/50 pb-8'>
          <div className='mt-7'>
            {/* <div className='space-y-3'>
              <Heading
                title='Recent Activity'
                description="Welcome back!, Here's the recent activity for this learning app"
              />
            </div> */}

            <>
              <div className='ml-6 space-y-0.5'>
                <h3 className='pb-2 text-xl font-semibold tracking-tight lg:text-2xl'>
                  Recent Activity
                </h3>

                <p className='text-muted-foreground'>
                  Welcome back!, Here&apos;s the recent activity for this
                  learning app
                </p>

                <div className='mt-4'>
                  <Separator className='my-6' />
                </div>
              </div>
            </>

            <div className='space-y-3 px-6 pt-2'>
              <div className='flex items-center gap-3 rounded-lg bg-white p-3 dark:bg-zinc-800'>
                <div className='h-2 w-2 rounded-full bg-green-500'></div>
                <p className='text-sm'>
                  UseEffect Tutorial&quot; was updated 2 hours ago
                </p>
              </div>
              <div className='mb-6 flex items-center gap-3 rounded-lg bg-white p-3 dark:bg-zinc-800'>
                <div className='h-2 w-2 rounded-full bg-blue-500'></div>
                <p className='text-sm'>
                  Added react advance concepts to the platform
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-7 flex-1 rounded-xl bg-muted/50'>
          <div className='ml-6 space-y-0.5 pb-6 pt-6'>
            <h3 className='text-xl font-semibold tracking-tight lg:text-2xl'>
              Tasks
            </h3>
            <p className='mb-6 pt-2 text-muted-foreground'>
              Welcome back!, Here&pos;s the recent activity for this learning
              app
            </p>

            <div className='mb-6 pt-4'>
              <Separator />
            </div>
          </div>

          <DataTable data={data} />
        </div>

        <div className='mt-7 flex-1 rounded-xl bg-muted/50 pb-8'>
          <div className='ml-6 space-y-0.5 pb-6 pt-6'>
            <h3 className='text-xl font-semibold tracking-tight lg:text-2xl'>
              React Projects
            </h3>
            <p className='mb-6 pt-2 text-muted-foreground'>
              A collection of react projects built durning learnig curve.
            </p>

            <div className='mb-6 pt-4'>
              <Separator />
            </div>
          </div>

          <div className='grid auto-rows-min gap-4 px-6 lg:grid-cols-2 xl:grid-cols-3'>
            <div className='aspect-video rounded-xl bg-muted/50'></div>
            <div className='aspect-video rounded-xl bg-muted/50' />
            <div className='aspect-video rounded-xl bg-muted/50' />

            <div className='aspect-video rounded-xl bg-muted/50'></div>
            <div className='aspect-video rounded-xl bg-muted/50' />
            <div className='aspect-video rounded-xl bg-muted/50' />
          </div>
        </div>
      </div>
    </>
  )
}
