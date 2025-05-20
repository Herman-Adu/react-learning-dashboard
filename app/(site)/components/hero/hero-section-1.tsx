import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, CirclePlay } from 'lucide-react'
import { BackgroundPattern } from '../background-pattern'
import Link from 'next/link'
//import { useEffect, useState } from 'react'

/* fetchData = () => {
  fetch(`https://api.example.com/data?userId=${this.props.userId}`)
    .then(response => response.json())
    .then(data => this.setState({ data, loading:false }))
    .catch(error => this.setState({ error, loading: false}))
}

componentDidMount() {
  this.fetchData();
}

componentDidUpdate(prevProps) {
  // Check if the userId prop has changed
  if(this.prop.userId !== prevProps.userId) {
    this.setData({data: null})
    this.fetchData();
  }  
} */

/* useEffect(() => {
  fetch(`https://api.example.com/data?userId=${userId}`)
    .then(response => response.json())
    .then((data) => {
      setData();
    })
}, []); */

/* useEffect(() => {
  fetch(`https://api.example.com/data?userId=${userId}`)
    .then(response => response.json())
    .then((data) => {
      setData();
    })
}, [ userId ]); */

/* async function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("New York");

  useEffect(() => {
    const response = await fetch(`weather api`)
    const data = await response.json()

    setWeatherData(data)
  }, [ location ]);
} */

/*   useEffect(() => {
    fetchStockPrice(fetchStcokPrice, 1000) // fetch data immediately on render
    const intervalid = setInterval(fetchStockPrice, 1000); // fetch data every 1 second
    
    // cleanup interval on component unmount
    return () = clearinterval(intervalid)
    
  }, []); */

/* const [isOnline, setIsOnline] = useState(navigator.online);
const updateOnlineStatus = () => {
  setIsOnline(navigator.onLine)
}

useEffect(() => {
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('online', updateOnlineStatus);
  
  return () => {
    window.addEventListener('offline', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);  
  }
}, []); */

/* const [data, setData] = useState(null);
const [interval, setInterval] = useState(0.01);

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const result = response.json();
    setData(result)
  }

  // timer function
  const timerId = setTimeout(() => {
    fetchData(interval * 1000);
  })

  // cleanup function
  return () => {
    clearTimeout(timerId)
  }

}, [interval]); */ // Dependency that changes fequently

/* const [messages, setMesages] = useState([])

useEffect(() => {
  const socket = new WebSocket("Your Browser")

  socket.onmessage =  (event) => {
    setMesages((prevMessage) => [...prevMessages, event.data])
  };

  return () => {
    socket.close()
  }

}, [roomId])
 */

const HeroSectionOne = () => {
  return (
    <>
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
            Explore a collection of React JS learning curves, from fundamentals
            to advance practises, ready to preview. Streamline your development
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

      {/* <main className='overflow-x-hidden'>
        <section>
          <div className='pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44'>
            <div className='relative mx-auto flex max-w-6xl flex-col px-6 lg:block'>
              <div className='mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left'>
                <h1 className='mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl'>
                  Ship 10x Faster with NS
                </h1>
                <p className='mt-8 max-w-2xl text-pretty text-lg'>
                  Highly customizable components for building modern websites
                  and applications that look and feel the way you mean it.
                </p>

                <div className='mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start'>
                  <Button asChild size='lg' className='px-5 text-base'>
                    <Link href='#link'>
                      <span className='text-nowrap'>Start Building</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size='lg'
                    variant='ghost'
                    className='px-5 text-base'
                  >
                    <Link href='#link'>
                      <span className='text-nowrap'>Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                className='-z-10 order-first ml-auto h-56 w-full object-cover invert dark:mix-blend-lighten dark:invert-0 sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain'
                src='https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768'
                alt='Abstract Object'
                height='4000'
                width='3000'
              />
            </div>
          </div>
        </section>
      </main> */}
    </>
  )
}

export default HeroSectionOne
