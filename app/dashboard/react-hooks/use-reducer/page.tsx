import Heading from '@/components/heading'
import { Button } from '@/components/ui/button'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { faq } from '@/data/faq'

export default function UseReducerPage() {
  return (
    <>
      <Heading
        title='useReducer Hook'
        description='A react hook that helps developers manage complex state
          logic in React applications.'
      />

      <article className='p-4'>
        <div className='flex flex-col gap-4 lg:flex-row'>
          <div className='flex w-full flex-col gap-6 xl:w-4/6'>
            <div className='w-full rounded-xl bg-muted/50 p-6'>
              <h3 className='text-xl font-semibold tracking-tight lg:text-2xl'>
                Introduction to useReducer
              </h3>

              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
              </p>
            </div>

            <div className='w-full rounded-xl bg-muted/50 p-6'>
              <div className=''>
                <h3 className='mb-4 text-xl font-semibold tracking-tight lg:text-2xl'>
                  Frequently Asked Questions
                </h3>

                <Accordion type='multiple' className='w-full border-t'>
                  {faq.map(({ title, content }, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className='gap-3 py-3 text-left text-lg font-semibold'>
                        {title}
                      </AccordionTrigger>
                      <AccordionContent className='text-base'>
                        {content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
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
