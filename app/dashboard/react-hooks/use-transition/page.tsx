import Heading from '@/components/heading'
import { Button } from '@/components/ui/button'

export default function UseTransitionPage() {
  return (
    <>
      <Heading
        title='useTransition Hook Tutorial'
        description='A React Hook that lets you render a part of the UI in the background.'
      />

      <article className='p-4'>
        <div className='flex min-h-screen flex-col gap-4 lg:flex-row'>
          <div className='min-h-screen w-full rounded-xl bg-muted/50 p-6 xl:w-4/6'>
            <h2 className='mb-6 text-xl font-bold tracking-tight'>
              What is the useTransition Hook?
            </h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className='hidden max-h-fit rounded-xl bg-muted/50 p-6 xl:block xl:w-2/6'>
            <h2 className='mb-6 text-xl font-bold tracking-tight'>
              Table of Contents
            </h2>

            <ol className='ml-8 list-decimal'>
              <li>The problem of re-renders and memoization in React</li>
              <li>React Compiler 🚀 to the rescue</li>
              <li>React Compiler on simple examples</li>
              <li>React Compiler on the real app</li>
              <li>Initial load performance and the React Compiler</li>
              <li>Interactions performance and React Compiler</li>
              <li>Can React Compiler catch all re-renders?</li>
              <li>Quick summary</li>
            </ol>

            <h2 className='mb-6 mt-8 text-xl font-bold tracking-tight'>
              Want to learn more?
            </h2>

            <div className='flex flex-col gap-6'>
              <Button variant='secondary' className='p-6'>
                <span>React Cheat Sheet</span>
              </Button>
              <Button variant='secondary' className='p-6'>
                <span>React Cheat Sheet</span>
              </Button>
              <Button variant='secondary' className='p-6'>
                <span>React Cheat Sheet</span>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
