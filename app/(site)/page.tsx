import { Features } from './components/features'
import Hero06 from './components/hero-01'

export default function Home() {
  return (
    <section className='pb-24 pt-32 md:pt-40'>
      <div className='-mt-16'>
        <Hero06 />
        <Features />
      </div>
    </section>
  )
}
