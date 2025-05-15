import Heading from '@/components/heading'

export default function ReactDashboard() {
  return (
    <>
      <Heading
        title='React Dashboard'
        description="Welcome back!, Here's the recent activity for this learning app"
      />

      <div className='flex min-h-screen flex-1 flex-col gap-4 p-4'>
        <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
          <div className='aspect-video rounded-xl bg-muted/50' />
          <div className='aspect-video rounded-xl bg-muted/50' />
          <div className='aspect-video rounded-xl bg-muted/50' />
        </div>
        <div className='flex-1 rounded-xl bg-muted/50 md:min-h-min'>herman</div>
      </div>
    </>
  )
}
