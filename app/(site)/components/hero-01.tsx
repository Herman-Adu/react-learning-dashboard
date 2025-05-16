import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, CirclePlay } from 'lucide-react'
import { BackgroundPattern } from './background-pattern'
import Link from 'next/link'

const Hero06 = () => {
  return (
    <div className='flex min-h-screen items-center justify-center px-6'>
      <BackgroundPattern />

      <div className='relative z-10 max-w-2xl text-center'>
        <Badge className='rounded-full border-none bg-gradient-to-br from-primary via-muted/30 via-70% to-primary py-1'>
          Just released v1.0.0
        </Badge>
        <h1 className='mt-6 text-4xl font-bold !leading-[1.2] tracking-tight sm:text-5xl md:text-6xl'>
          {/* Customized Shadcn UI Blocks & Components */}
          React Dashboard built for learning
        </h1>
        <p className='mt-6 text-[17px] md:text-lg'>
          Explore a collection of React JS learning curves, from fundamentals to
          advance practises, ready to preview. Streamline your development
          process with easy-to-implement examples.
        </p>
        <div className='mt-12 flex items-center justify-center gap-4'>
          {/* <Button size='lg' className='rounded-full text-base'>
            Get Started <ArrowUpRight className='!h-5 !w-5' />
          </Button> */}
          <Button asChild size='lg' className='rounded-full text-base'>
            <Link href='/dashboard'>
              Get Started
              <ArrowUpRight className='!h-5 !w-5' />
            </Link>
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='rounded-full text-base shadow-none'
          >
            <CirclePlay className='!h-5 !w-5' /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero06
