import {
  CircleCheck,
  MoveRightIcon,
  PuzzleIcon,
  ShapesIcon
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { FAQ } from '../faqs/faq'

export const Features = () => {
  return (
    <section className='mx-auto max-w-screen-lg px-6 lg:px-0'>
      <h2 className='text-center text-5xl font-bold'>Core Features</h2>
      <div className='mb-14 mt-20 grid grid-cols-1 gap-8 md:grid-cols-2'>
        <Card className='bg-secondary/40 shadow-none'>
          <CardHeader className='gap-3 pb-2'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
              <ShapesIcon className='h-5 w-5' />
            </div>
            <h3 className='text-2xl font-bold tracking-tight'>Blocks</h3>
          </CardHeader>
          <CardContent>
            <p>
              Blocks are uniquely designed sections that make building your
              website easy. Simply preview, copy the code, and add a fresh new
              section to your site instantly.
            </p>
            <ul className='mt-6 space-y-3 text-[15px]'>
              <li className='flex items-start gap-2'>
                <CircleCheck className='h-[18px] w-[18px]' />
                <div>
                  <h6 className='mb-0.5 font-semibold leading-[18px]'>
                    Fully responsive
                  </h6>
                  <p className='text-sm text-foreground/90'>
                    Each block is optimized for perfect display on any device.
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-2'>
                <CircleCheck className='h-[18px] w-[18px]' />
                <div>
                  <h6 className='mb-0.5 font-semibold leading-[18px]'>
                    Easily preview and copy
                  </h6>
                  <p className='text-sm text-foreground/90'>
                    Quickly view how blocks look and grab the code in one click.
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-2'>
                <CircleCheck className='h-[18px] w-[18px]' />
                <div>
                  <h6 className='mb-0.5 font-semibold leading-[18px]'>
                    Absolutely Free to Use
                  </h6>
                  <p className='text-sm text-foreground/90'>
                    Use all blocks without any restrictions or fees.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
          <CardFooter className='pt-1'>
            <Button asChild>
              <Link href='/blocks'>
                View Blocks <MoveRightIcon />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className='bg-secondary/40 shadow-none'>
          <CardHeader className='gap-3 pb-2'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
              <PuzzleIcon className='h-5 w-5' />
            </div>
            <h3 className='text-2xl font-bold tracking-tight'>
              Customized Components
            </h3>
          </CardHeader>
          <CardContent>
            <p>
              Enhance your design with our collection of customized Shadcn UI
              components, crafted to give you more flexibility and style options
              for a polished, unique look.
            </p>

            <ul className='mt-6 space-y-3 text-[15px]'>
              <li className='flex items-start gap-2'>
                <CircleCheck className='h-[18px] w-[18px]' />
                <div>
                  <h6 className='mb-0.5 font-semibold leading-[18px]'>
                    Multiple Variants
                  </h6>
                  <p className='text-sm text-foreground/90'>
                    Access a wide range of component styles to fit any design
                    need.
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-2'>
                <CircleCheck className='h-[18px] w-[18px]' />
                <div>
                  <h6 className='mb-0.5 font-semibold leading-[18px]'>
                    Fully Customizable
                  </h6>
                  <p className='text-sm text-foreground/90'>
                    Adjust colors, sizes, and styles to match your brand
                    seamlessly.
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-2'>
                <CircleCheck className='h-[18px] w-[18px]' />
                <div>
                  <h6 className='mb-0.5 font-semibold leading-[18px]'>
                    Absolutely Free to Use
                  </h6>
                  <p className='text-sm text-foreground/90'>
                    Enjoy unlimited access to all components at no cost.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
          <CardFooter className='pt-1'>
            <Button asChild>
              <Link href='/components/accordion'>
                Explore Components
                <MoveRightIcon />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <FAQ />
    </section>
  )
}
