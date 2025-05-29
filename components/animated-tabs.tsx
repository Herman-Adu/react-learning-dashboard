'use client'

import React from 'react'

import {
  CircleCheck,
  MoveRightIcon,
  PuzzleIcon,
  ShapesIcon
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

import { AnimatePresence, motion } from 'motion/react'

import { useTabs, type Tab } from '@/hooks/use-tabs'
import { cn } from '@/lib/utils'
import { Separator } from './ui/separator'
import Contact from './contact'

interface AnimatedTabsProps {
  tabs: Tab[]
}

const transition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.15
}

const getHoverAnimationProps = (hoveredRect: DOMRect, navRect: DOMRect) => ({
  x: hoveredRect.left - navRect.left - 10,
  y: hoveredRect.top - navRect.top - 4,
  width: hoveredRect.width + 20,
  height: hoveredRect.height + 10
})

const TabContent = ({ tab }: { tab: Tab }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={transition}
      className='mt-4 rounded-xl bg-zinc-50 dark:bg-zinc-900'
    >
      {tab.value === 'home' && (
        <>
          {/* <div className='mt-8 pt-8'>
            <Heading
              title='Welcome to Our Platform'
              description='Discover a new way to manage your projects and collaborate with your team.'
            />
          </div> */}

          <div className='ml-6 space-y-0.5 pt-6'>
            <h3 className='text-xl font-semibold tracking-tight lg:text-2xl'>
              Welcome to Our Platform
            </h3>
            <p className='mb-6 text-muted-foreground'>
              Discover a new way to manage your projects and collaborate with
              your team.
            </p>
            <div className='mb-6 pt-6'>
              <Separator />
            </div>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 px-6 pb-10 lg:grid-cols-2 xl:grid-cols-3'>
            <div className='rounded-lg bg-white dark:bg-zinc-800'>
              <Card className='flex flex-col bg-secondary/40 shadow-none'>
                <CardHeader className='flex-1 gap-3 pb-2'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                    <ShapesIcon className='h-5 w-5' />
                  </div>
                  <h3 className='text-2xl font-bold tracking-tight'>
                    Quick Start
                  </h3>
                </CardHeader>
                <CardContent>
                  <p>
                    Learning the basic fundamentals of ReactJS, utilising our
                    comprehensive collection of short tutorials.
                  </p>
                  <ul className='mt-6 space-y-3 text-[15px]'>
                    <li className='flex items-start gap-2'>
                      <CircleCheck className='h-[18px] w-[18px]' />
                      <div>
                        <h6 className='mb-0.5 font-semibold leading-[18px]'>
                          Fully responsive
                        </h6>
                        <p className='text-sm text-foreground/90'>
                          Each block is optimized for perfect display on any
                          device.
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
                          Quickly view how blocks look and grab the code in one
                          click.
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
                <CardFooter className='flex w-full flex-row items-center justify-center pt-1'>
                  <Button asChild variant='outline'>
                    <Link href='/dashboard/react-fundamentals/introduction'>
                      React Basics <MoveRightIcon />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className='rounded-lg bg-white dark:bg-zinc-800'>
              <Card className='bg-secondary/40 shadow-none'>
                <CardHeader className='gap-3 pb-2'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                    <PuzzleIcon className='h-5 w-5' />
                  </div>
                  <h3 className='text-2xl font-bold tracking-tight'>
                    React Hooks
                  </h3>
                </CardHeader>
                <CardContent>
                  <p>
                    Enhance your understanding of react hooks with our
                    comprehensive collection of short tutorials.
                  </p>

                  <ul className='mt-6 space-y-3 text-[15px]'>
                    <li className='flex items-start gap-2'>
                      <CircleCheck className='h-[18px] w-[18px]' />
                      <div>
                        <h6 className='mb-0.5 font-semibold leading-[18px]'>
                          Multiple Variants
                        </h6>
                        <p className='text-sm text-foreground/90'>
                          Access a wide range of component styles to fit any
                          design need.
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
                <CardFooter className='flex w-full flex-row items-center justify-center pt-1'>
                  <Button asChild variant='outline'>
                    <Link href='/dashboard/react-hooks/use-effect'>
                      React Hooks
                      <MoveRightIcon />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className='rounded-lg bg-white dark:bg-zinc-800'>
              <Card className='bg-secondary/40 shadow-none'>
                <CardHeader className='gap-3 pb-2'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                    <PuzzleIcon className='h-5 w-5' />
                  </div>
                  <h3 className='text-2xl font-bold tracking-tight'>
                    Advance Concepts
                  </h3>
                </CardHeader>
                <CardContent>
                  <p>
                    A better understanding of react advance concepts with our
                    comprehensive collection of short tutorials.
                  </p>

                  <ul className='mt-6 space-y-3 text-[15px]'>
                    <li className='flex items-start gap-2'>
                      <CircleCheck className='h-[18px] w-[18px]' />
                      <div>
                        <h6 className='mb-0.5 font-semibold leading-[18px]'>
                          Multiple Variants
                        </h6>
                        <p className='text-sm text-foreground/90'>
                          Access a wide range of component styles to fit any
                          design need.
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

                <CardFooter className='flex w-full flex-row items-center justify-center pt-1'>
                  <Button asChild variant='outline'>
                    <Link href='/dashboard/advance-concepts/design-patterns'>
                      Advance Concepts
                      <MoveRightIcon />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* <div className='space-y-3 px-6 pt-2'>
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
          </div> */}

          {/* </div> */}
          {/* <div>
            <h3 className='mb-4 text-xl font-semibold'>Recent Activity</h3>

            <div className='space-y-3'>
              <div className='flex items-center gap-3 rounded-lg bg-white p-3 dark:bg-zinc-800'>
                <div className='h-2 w-2 rounded-full bg-green-500'></div>
                <p className='text-sm'>
                  UseEffect Tutorial&quot; was updated 2 hours ago
                </p>
              </div>
              <div className='flex items-center gap-3 rounded-lg bg-white p-3 dark:bg-zinc-800'>
                <div className='h-2 w-2 rounded-full bg-blue-500'></div>
                <p className='text-sm'>
                  Added react advance concepts to the platform
                </p>
              </div>
            </div>
          </div> */}
        </>
      )}
      {tab.value === 'about' && (
        <div className='space-y-8'>
          <div className='ml-6 space-y-0.5 pt-6'>
            <h3 className='text-xl font-semibold tracking-tight lg:text-2xl'>
              About Me!
            </h3>
            <p className='mb-6 text-muted-foreground'>
              I am a freelance full-stack web developer based in Greater London
              and surrounding counties. I provide comprehensive web development
              services for start-up&apos;s and small to medium business looking
              to implement comprehensive digital strategy. By focusing on their
              ethos, goals, aspirations, expectations and existing online
              presence, I deliver efficient, cost-effective, and tailored
              digital solutions to clients
            </p>
            <div className='mb-6 pt-6'>
              <Separator />
            </div>
          </div>
          <div className='space-y-8'>
            <div className='ml-6 space-y-0.5'>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div className='mb-8 rounded-lg bg-white dark:bg-zinc-800'>
                  <Card className='bg-secondary/40 shadow-none'>
                    <CardHeader className='flex flex-row gap-3 pb-2'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                        <PuzzleIcon className='h-5 w-5' />
                      </div>
                      <h3 className='text-2xl font-bold tracking-tight'>
                        My Mission
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p>
                        To deliver innovative tools and solutions that drive
                        growth and success in the digital age.
                      </p>

                      <ul className='mt-6 space-y-3 text-[15px]'>
                        <li className='flex items-start gap-2'>
                          <CircleCheck className='h-[18px] w-[18px]' />
                          <div>
                            <h6 className='mb-0.5 font-semibold leading-[18px]'>
                              Multiple Variants
                            </h6>
                            <p className='text-sm text-foreground/90'>
                              Access a wide range of component styles to fit any
                              design need.
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
                              Adjust colors, sizes, and styles to match your
                              brand seamlessly.
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
                              Enjoy unlimited access to all components at no
                              cost.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className='flex w-full flex-row items-center justify-center pt-1'>
                      <Button asChild variant='outline'>
                        <Link href='/dashboard/react-hooks/use-effect'>
                          React Hooks
                          <MoveRightIcon />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className='mb-8 rounded-lg bg-white dark:bg-zinc-800'>
                  <Card className='bg-secondary/40 shadow-none'>
                    <CardHeader className='flex flex-row gap-3 pb-2'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                        <PuzzleIcon className='h-5 w-5' />
                      </div>
                      <h3 className='text-2xl font-bold tracking-tight'>
                        My Vision
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p>
                        A driving force in advancements, redefining
                        possibilities in an evolving dynamic digital landscape.
                      </p>

                      <ul className='mt-6 space-y-3 text-[15px]'>
                        <li className='flex items-start gap-2'>
                          <CircleCheck className='h-[18px] w-[18px]' />
                          <div>
                            <h6 className='mb-0.5 font-semibold leading-[18px]'>
                              Multiple Variants
                            </h6>
                            <p className='text-sm text-foreground/90'>
                              Access a wide range of component styles to fit any
                              design need.
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
                              Adjust colors, sizes, and styles to match your
                              brand seamlessly.
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
                              Enjoy unlimited access to all components at no
                              cost.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className='flex w-full flex-row items-center justify-center pt-1'>
                      <Button asChild variant='outline'>
                        <Link href='/dashboard/react-hooks/use-effect'>
                          React Hooks
                          <MoveRightIcon />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {tab.value === 'contact' && (
        <div className='mx-auto max-w-2xl px-8 py-8 md:px-0'>
          <Contact />
          {/* <h2 className='mb-6 text-3xl font-bold'>Get in Touch</h2>
          <div className='mb-8 grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div>
              <h3 className='mb-4 text-xl font-semibold'>
                Contact Information
              </h3>
              <div className='space-y-4'>
                <div>
                  <p className='font-medium'>Address</p>
                  <p className='text-zinc-600 dark:text-zinc-400'>
                    123 Business Street
                  </p>
                  <p className='text-zinc-600 dark:text-zinc-400'>
                    San Francisco, CA 94105
                  </p>
                </div>
                <div>
                  <p className='font-medium'>Email</p>
                  <p className='text-zinc-600 dark:text-zinc-400'>
                    contact@example.com
                  </p>
                </div>
                <div>
                  <p className='font-medium'>Phone</p>
                  <p className='text-zinc-600 dark:text-zinc-400'>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <label className='mb-1 block text-sm font-medium'>Name</label>
                <input
                  type='text'
                  className='w-full rounded-md border p-2 dark:border-zinc-700 dark:bg-zinc-800'
                />
              </div>
              <div>
                <label className='mb-1 block text-sm font-medium'>Email</label>
                <input
                  type='email'
                  className='w-full rounded-md border p-2 dark:border-zinc-700 dark:bg-zinc-800'
                />
              </div>
              <button className='w-full rounded-md bg-black py-2 font-medium text-white dark:bg-white dark:text-black'>
                Send Message
              </button>
            </div>
          </div> */}
        </div>
      )}
      {/* {tab.value === 'danger-zone' && (
        <div className='mx-auto max-w-2xl'>
          <h2 className='mb-6 text-2xl font-bold text-red-500'>Caution!</h2>
          <div className='space-y-6'>
            <div className='rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-900/20'>
              <h3 className='mb-2 text-lg font-semibold text-red-600 dark:text-red-400'>
                Delete Account
              </h3>
              <p className='mb-4 text-red-600/80 dark:text-red-400/80'>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
              <div className='flex items-center gap-4'>
                <input
                  type='text'
                  placeholder="Type 'delete' to confirm"
                  className='flex-1 rounded-md border border-red-200 p-2 dark:border-red-800 dark:bg-red-900/30'
                />
                <button className='rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600'>
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </motion.div>
  )
}

const Tabs = ({
  tabs,
  selectedTabIndex,
  setSelectedTab
}: {
  tabs: Tab[]
  selectedTabIndex: number
  setSelectedTab: (input: [number, number]) => void
}): React.ReactElement => {
  const [buttonRefs, setButtonRefs] = React.useState<
    Array<HTMLButtonElement | null>
  >([])

  React.useEffect(() => {
    setButtonRefs(prev => prev.slice(0, tabs.length))
  }, [tabs.length])

  const navRef = React.useRef<HTMLDivElement>(null)
  const navRect = navRef.current?.getBoundingClientRect()

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect()

  const [hoveredTabIndex, setHoveredTabIndex] = React.useState<number | null>(
    null
  )
  const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect()

  return (
    <nav
      ref={navRef}
      className='relative z-0 flex flex-shrink-0 items-center justify-center py-2'
      onPointerLeave={() => setHoveredTabIndex(null)}
    >
      {tabs.map((item, i) => {
        const isActive = selectedTabIndex === i

        return (
          <button
            key={item.value}
            className='relative z-20 flex h-8 cursor-pointer select-none items-center rounded-md bg-transparent px-4 text-sm transition-colors'
            onPointerEnter={() => setHoveredTabIndex(i)}
            onFocus={() => setHoveredTabIndex(i)}
            onClick={() => setSelectedTab([i, i > selectedTabIndex ? 1 : -1])}
          >
            <motion.span
              ref={el => {
                buttonRefs[i] = el as HTMLButtonElement
              }}
              className={cn('block', {
                'text-zinc-500': !isActive,
                'font-semibold text-black dark:text-white': isActive
              })}
            >
              <small
                className={item.value === 'danger-zone' ? 'text-red-500' : ''}
              >
                {item.label}
              </small>
            </motion.span>
          </button>
        )
      })}

      <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            key='hover'
            className={`absolute left-0 top-0 z-10 rounded-md ${
              hoveredTabIndex ===
              tabs.findIndex(({ value }) => value === 'danger-zone')
                ? 'bg-red-100 dark:bg-red-500/30'
                : 'bg-zinc-100 dark:bg-zinc-800'
            }`}
            initial={{
              ...getHoverAnimationProps(hoveredRect, navRect),
              opacity: 0
            }}
            animate={{
              ...getHoverAnimationProps(hoveredRect, navRect),
              opacity: 1
            }}
            exit={{
              ...getHoverAnimationProps(hoveredRect, navRect),
              opacity: 0
            }}
            transition={transition}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedRect && navRect && (
          <motion.div
            className={`absolute bottom-0 left-0 z-10 h-[2px] ${
              selectedTabIndex ===
              tabs.findIndex(({ value }) => value === 'danger-zone')
                ? 'bg-red-500'
                : 'bg-black dark:bg-white'
            }`}
            initial={false}
            animate={{
              width: selectedRect.width + 18,
              x: `calc(${selectedRect.left - navRect.left - 9}px)`,
              opacity: 1
            }}
            transition={transition}
          />
        )}
      </AnimatePresence>
    </nav>
  )
}

export function AnimatedTabs({ tabs }: AnimatedTabsProps) {
  const [hookProps] = React.useState(() => {
    const initialTabId =
      tabs.find(tab => tab.value === 'home')?.value || tabs[0].value

    return {
      tabs: tabs.map(({ label, value, subRoutes }) => ({
        label,
        value,
        subRoutes
      })),
      initialTabId
    }
  })

  const framer = useTabs(hookProps)

  return (
    <div className='w-full'>
      <div className='dark:border-dark-4 relative flex w-full items-center justify-between overflow-x-auto overflow-y-hidden border-b'>
        <Tabs {...framer.tabProps} />
      </div>
      <AnimatePresence mode='wait'>
        <TabContent tab={framer.selectedTab} />
      </AnimatePresence>
    </div>
  )
}
