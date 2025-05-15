import { Separator } from '@/components/ui/separator'

interface HeadingProps {
  title: string
  description: string
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
      <div className='ml-6 space-y-0.5'>
        <h1 className='text-2xl font-bold tracking-tight'>{title}</h1>
        <p className='text-muted-foreground'>{description}</p>
      </div>

      <Separator className='my-6' />
    </>
  )
}

export default Heading
