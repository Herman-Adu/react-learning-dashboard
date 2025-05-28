import Heading from '@/components/heading'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
//import { faq } from '@/data/faq'
import { useEffectFaqs } from '@/data/useEffectFaqs'
import Link from 'next/link'

export default function UseEffectPage() {
  return (
    <>
      <Heading
        title='useEffect Hook'
        description='A react hook that lets you synchronize a component with an external system.'
      />

      <article className='p-4'>
        <div className='flex flex-col gap-4 lg:flex-row'>
          <div className='flex w-full flex-col gap-6 xl:w-4/6'>
            <div className='w-full rounded-xl bg-muted/50 p-6'>
              <h3 className='text-xl font-semibold tracking-tight lg:text-2xl'>
                Introduction to useEffect
              </h3>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Have you ever considered how our components, react to things
                that happen around them, for example fetching new data every
                time something changes or handling components that can
                dynamically update and respond to real time events, well this is
                what the useEffect is for. The useEffect hook helps our
                components manage side effects, facilitating a process to easily
                respond to changes, allowing us to synchronise our components
                with external systems.
              </p>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                In this guide we&apos;re exploring the useEffect hook, how it
                works, why we need it, presenting real world scenarios that show
                when and why you&apos;ll want to use the useEffect hook.
              </p>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Let&apos;s begin by describing the useEffect as a react hook
                that lets you run side effects. A lot of people are confused
                about what exactly side effects are, so we will start there.
              </p>
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'>
                What are Side Effects?
              </h3>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                In simple terms, side effects are actions in our code that
                happen outside of rendering the UI, so what do we mean by that.
                Let&apos;s think about when we&apos;re making food and we have a
                timer in the kitchen to alert us when to check on the food. Our
                main goal is to make the perfect meal, so we set a timer for
                every 3 minutes and each time it rings we check the food, give
                it a stir and turn it over, so the meal is evenly cook through.
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/side-effect-v1.png'
                alt='dark-mode-image'
                width={1018}
                height={261}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                In this case the timer&apos;s influences us to check on the food
                at regular intervals, causing what we call a side effect. An
                action that results from a primary task, which in this case, is
                the timer&apos;s influence on our behaviour to check on the food
                we are cooking.
              </p>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                This concept can be applied to everything in react for example
                you may need to fetch new data every time the list changes so
                you can show an updated list to your users. We can understand
                this better on a deeper level once we grasp how use effect works
                at a fundamental level.
              </p>
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'>
                History of useEffect
              </h3>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Before react introduced hooks, class components were the primary
                way to manage side effects utilising life cycle methods in react
                applications. Developers use life cycle methods like component
                did Mount component did update and component will unmount
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/side-effect-history-v3.png'
                alt='dark-mode-image'
                width={1804}
                height={467}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                for example when we want to fetch data from an API based on the
                userId property
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/fetch-data-user-id.png'
                alt='dark-mode-image'
                width={1115}
                height={222}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                we would need to separately Define what happened when the
                component first renders and then check for side effects such as
                the changes of the userId and componentDidUpdate to fetch new
                data. Since we have the useEffect hook this process has been
                simplified
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/check-for-side-effects-class.png'
                alt='dark-mode-image'
                width={1396}
                height={454}
              />
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'>
                Syntax of useEffect
              </h3>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                The syntax of the use effect Hook is very easy to remember you
                just declare useEffect and inside you place an arrow function in
                an array inside this Arrow function is where your side effect
                code runs
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/empty-use-effect.png'
                alt='dark-mode-image'
                width={1228}
                height={663}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                In our earlier example this is where we fetch new data when the
                userId changes. So how does useEffect know when the userId
                changes. Well useEffect needs to depend on something to know
                whether it should run the side effects or not, that&apos;s why
                useEffect has what we call dependencies.
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/useEffect-syntax.png'
                alt='dark-mode-image'
                width={1369}
                height={606}
              />
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'>
                Dependencies
              </h3>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Inside the array is where we place our variables or props that
                our useEffect function depends on. If any of these dependencies
                change between renders, the useEffect function will re-run and
                in our use case, our dependency is the userId. So every time the
                userId changes, the useEffect will fetch new data based on that
                userId.
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/useEffect-based-on-userid.png'
                alt='dark-mode-image'
                width={1369}
                height={606}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Unlike in the past, we don&apos;t have to manually declare each
                life cycle method like in-class components, this is why the
                useEffect is so useful in terms of saving time and improving
                code readability. We can see this more in things that are
                regularly required to refresh data, for example building a
                weather app.{' '}
              </p>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Weather apps rely heavily on timely and accurate data to provide
                users with up-to-date weather information ensuring that users
                always have the latest weather updates based on location without
                having to manually refresh the app.
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/weather-app-v1.png'
                alt='dark-mode-image'
                width={1001}
                height={528}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                When we first open the app useEffect will run right away and
                fetch the data from the API and show the weather information for
                New York as it is our default location. However if we input
                another location, it will now fetch new data, based on the
                location submitted by the user.
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/weather-api-v1.png'
                alt='dark-mode-image'
                width={1396}
                height={758}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                UseEffect is also very important when we need to update the
                component State immediately after the data changes. for example
                in a financial app where every second counts we want to display
                the numbers immediately
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/financial-app.png'
                alt='financial app image'
                width={1087}
                height={476}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                After the data changes in this example we use the useEffect hook
                to fetch the stock price every second. We use the set interval
                function to get the stock price every second, but as we examine
                the code more closely this useEffect also uses a return function
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/cleanup-function-v1.png'
                alt='financial app image'
                width={1087}
                height={476}
              />
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'>
                Cleanup Function
              </h3>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                What exactly is happening here? The useEffect hook has a third
                property called the cleanup function. This function works when
                the component is about to be removed from the document object
                model (DOM). This prevents memory leaks that can cause the
                application to consume more memory over time, leading to slower
                performance or even crash.
              </p>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Using the financial app example above, we use the cleanup
                function to stop fetching data when the user navigates away from
                the page or the component is removed from the screen. This will
                lessen our API calls and in return reduce the burden on the app
                and API expenses.
              </p>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                let&apos;s look at a simple example to understand this a little
                better, for instance, you wanted to build an online or offline
                status feature for your app. You think about wanting to let
                people know if they&apos;re online or not.
              </p>
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'>
                Status Feature
              </h3>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/online-app.png'
                alt='status feature app image'
                width={1087}
                height={476}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Well first you would need to make a state that saves the value
                of navigator.online. This feature tells you if the browser is
                online or not, it returns back a true value if the browser is
                connected to the internet and a false value if it isn&apos;t
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/online-app-v2.png'
                alt='status feature image'
                width={1646}
                height={530}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Now this is where the magic happens, using the useEffect hook
                ,we can immediately trigger window.addEventListener(), to
                subscribe to the online and offline events. These events fire
                whenever there&apos;s a shift in network connectivity whether
                the user goes offline or hops back online
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/cleanup-function-v2.png'
                alt='status feature code image'
                width={1620}
                height={683}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                What happens if the user closes the app or switches tabs? No
                worries, the cleanup function in useEffect makes sure that when
                the component is no longer in use these event listeners are
                automatically removed preventing memory leaks or unnecessary
                tests from running in the background, This method allows you to
                monitor a user&apos;s connection status in real time without
                putting extra strain on your app
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/cleanup-function-v3.png'
                alt='clean up function code image'
                width={1620}
                height={683}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                In simple terms, the cleanup function in reacts useEffect hook
                is a function that runs when the component is about to be
                removed or before the effect runs again. The purpose of this is
                to free up resources by doing things like stopping event
                listeners, turning off timers or cancelling network requests.
              </p>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                This helps stop memory problems and avoids doing things that are
                not needed it&apos;s like putting an automatic handbrake for
                your useEffect hook because if you didn&apos;t know, useEffect
                can be pretty dangerous to your app when you don&apos;t know
                what you&apos;re doing that&apos;s why in the next section
                we&apos;ll go over a couple of common pitfalls you will come
                across.
              </p>
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'>
                Common Pitfalls
              </h3>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                When using useEffect in your applications, we should all
                understand by now, that useEffect depends on whenever your
                dependency&apos;s data changes. If you include a dependency
                variable in useEffect that changes frequently, such as every
                0.01 seconds and you fetch data from an API within that
                useEffect it can lead to significant and costly mistakes.
              </p>
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'>
                Dependencies Array
              </h3>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/pitfalls-v1.png'
                alt='clean up function code image'
                width={1690}
                height={758}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                This setup above would result in excessive API calls
                dramatically increasing Network traffic and potentially
                incurring high costs if the API has usage limits or charges per
                request we don&apos;t want to hit the API calls limit over and
                over again right.
              </p>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                To fix this, it&apos;s crucial to implement a timer or debounce
                function to control how often the effect runs, additionally
                incorporating a cleanup function to cancel pending requests
                before initiating new ones can prevent overlapping calls and
                reduce unnecessary resource consumption.
              </p>
              <Image
                className='mt-8 rounded-lg'
                src='/use-effect/pitfalls-v2.png'
                alt='clean up function code image'
                width={1656}
                height={1024}
              />
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                This approach ensures that your application remains efficient
                and cost effective avoiding performance bottlenecks and
                financial pitfalls so the number one Pitfall to avoid is failing
                to check your dependencies array.
              </p>
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'>
                Cleanup Side Effects
              </h3>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                The second Pitfall to avoid when using useEffect is overlooking
                the importance of cleaning up side effects. Think about making a
                chat app, where every user connects to a server to get messages
                instantly. You would need to create a web socket connection
                using useEffect, so that it connects when the component loads.
              </p>
              {/*
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'></h3>
              <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'></h3>

              <p className='leading-7 [&:not(:first-child)]:mt-6'></p>
              <p className='leading-7 [&:not(:first-child)]:mt-6'></p>

              <Image
              className='mt-8 rounded-lg'
              src='/use-effect/cleanup-function-v3.png'
              alt='clean up function code image'
              width={1620}
              height={683}
            />
            */}
              <h3 className='mt-8 text-xl font-semibold tracking-tight lg:text-2xl'>
                Summary
              </h3>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos; standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{' '}
              </p>
            </div>

            <div className='w-full rounded-xl bg-muted/50 px-8 py-6'>
              <div className=''>
                <h3 className='mb-4 text-xl font-semibold tracking-tight lg:text-2xl'>
                  Frequently Asked Questions
                </h3>

                <Accordion type='multiple' className='w-full border-t'>
                  {useEffectFaqs.map(({ title, content }, index) => (
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
            {/* <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'></h3>
            <h3 className='mt-6 text-xl font-semibold tracking-tight lg:text-2xl'></h3>

            <p className='leading-7 [&:not(:first-child)]:mt-6'></p>
            <p className='leading-7 [&:not(:first-child)]:mt-6'></p> */}
          </div>

          <div className='hidden max-h-fit rounded-xl bg-muted/50 p-6 xl:block xl:w-2/6'>
            <h2 className='mb-6 text-xl font-bold tracking-tight'>
              Table of Contents
            </h2>

            <ol className='ml-8 list-decimal'>
              <li>Introduction</li>
              <li>What are Side Effects?</li>
              <li>History of useEffect</li>
              <li>Syntax of useEffect</li>
              <li>Dependencies</li>
              <li>Cleanup Function</li>
              <li>Common Pitfalls</li>
              <li>Fetching Data</li>
              <li>Summary</li>
            </ol>

            <h2 className='mb-6 mt-8 text-xl font-bold tracking-tight'>
              Want to learn more?
            </h2>

            <div className='flex flex-col gap-6'>
              <Button asChild variant='secondary' size='lg' className='p-6'>
                <Link href='/react-hooks/use-state'>
                  <span>useState Tutorial</span>
                </Link>
              </Button>
              <Button asChild variant='secondary' size='lg' className='p-6'>
                <Link href='/react-hooks/use-state'>
                  <span>useContext Guide</span>
                </Link>
              </Button>
              <Button asChild variant='secondary' size='lg' className='p-6'>
                <Link href='/react-hooks/use-state'>
                  <span>React Cheat Sheet</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
