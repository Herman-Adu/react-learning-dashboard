import Heading from '@/components/heading'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function UseEffectPage() {
  return (
    <>
      <Heading
        title='useEffect Hook'
        description='A react hook that lets you synchronize a component with an external system.'
      />

      <article className='p-4'>
        <div className='flex min-h-screen flex-col gap-4 lg:flex-row'>
          <div className='min-h-screen w-full rounded-xl bg-muted/50 p-6 xl:w-4/6'>
            <h2 className='text-xl font-semibold tracking-tight lg:text-3xl'>
              Introduction
            </h2>

            <p className='leading-7 [&:not(:first-child)]:mt-6'>
              Have you ever considered how our components, react to things that
              happen around them, for example fetching new data every time
              something changes or handling components that can dynamically
              update and respond to real time events, well this is what the
              useEffect is for. The useEffect hook helps our components manage
              side effects, facilitating a process to easily respond to changes,
              allowing us to synchronise our components with external systems.
            </p>

            <p className='leading-7 [&:not(:first-child)]:mt-6'>
              In this guide we&apos;re exploring the useEffect hook, how it
              works, why we need it, presenting real world scenarios that show
              when and why you&apos;ll want to use the useEffect hook.
            </p>

            <p className='leading-7 [&:not(:first-child)]:mt-6'>
              Let&apos;s begin by describing the useEffect as a react hook that
              lets you run side effects. A lot of people are confused about what
              exactly side effects are, so we will start there.
            </p>

            <h2 className='mt-8 text-xl font-semibold tracking-tight lg:text-3xl'>
              What are Side Effects?
            </h2>

            <p className='leading-7 [&:not(:first-child)]:mt-6'>
              In simple terms, side effects are actions in our code that happen
              outside of rendering the UI, so what do we mean by that.
              Let&apos;s think about when we&apos;re making food and we have a
              timer in the kitchen to alert us when to check on the food. Our
              main goal is to make the perfect meal, so we set a timer for every
              3 minutes and each time it rings we check the food, give it a stir
              and turn it over, so the meal is evenly cook through.
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
              This concept can be applied to everything in react for example you
              may need to fetch new data every time the list changes so you can
              show an updated list to your users. We can understand this better
              on a deeper level once we grasp how use effect works at a
              fundamental level.
            </p>

            <h2 className='mt-8 text-xl font-semibold tracking-tight lg:text-3xl'>
              History of useEffect
            </h2>

            <p className='leading-7 [&:not(:first-child)]:mt-6'>
              Before react introduced hooks, class components were the primary
              way to manage side effects utilising life cycle methods in react
              applications. Developers use life cycle methods like component did
              Mount component did update and component will unmount
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

            <h2 className='mt-8 text-xl font-semibold tracking-tight lg:text-3xl'>
              Syntax of useEffect
            </h2>

            <p className='leading-7 [&:not(:first-child)]:mt-6'>
              The syntax of the use effect Hook is very easy to remember you
              just declare useEffect and inside you place an arrow function in
              an array inside this Arrow function is where your side effect code
              runs
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

            <h2 className='mt-8 text-xl font-semibold tracking-tight lg:text-3xl'>
              Dependencies
            </h2>

            <p className='leading-7 [&:not(:first-child)]:mt-6'>
              Inside the array is where we place our variables or props that our
              useEffect function depends on. If any of these dependencies change
              between renders, the useEffect function will re-run and in our use
              case, our dependency is the userId. So every time the userId
              changes, the useEffect will fetch new data based on that userId.
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
              useEffect is so useful in terms of saving time and improving code
              readability. We can see this more in things that are regularly
              required to refresh data, for example building a weather app.{' '}
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
              When we first open the app useEffect will run right away and fetch
              the data from the API and show the weather information for New
              York as it is our default location
            </p>

            <Image
              className='mt-8 rounded-lg'
              src='/use-effect/weather-api-v1.png'
              alt='dark-mode-image'
              width={1396}
              height={758}
            />

            <h2 className='mt-6 text-xl font-semibold tracking-tight lg:text-3xl'></h2>
            <h2 className='mt-6 text-xl font-semibold tracking-tight lg:text-3xl'></h2>

            <p className='leading-7 [&:not(:first-child)]:mt-6'></p>
            <p className='leading-7 [&:not(:first-child)]:mt-6'></p>
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
              <li>Summary</li>
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
