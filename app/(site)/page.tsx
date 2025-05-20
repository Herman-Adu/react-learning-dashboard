import CallToAction from './components/call-to-action/call-to-action'
//import ContentSection from './components/content/content-1'
import { Features } from './components/features/features'
import HeroSectionOne from './components/hero/hero-section-1'
//import HeroSectionFour from './components/hero/hero-section-4'
//import HeroSectionFive from './components/hero/hero-section-5'
//import HeroSectionSix from './components/hero/hero-section-6'

export default function Home() {
  return (
    <section className='pb-24 pt-32 md:pt-40'>
      <div className='-mt-16'>
        <HeroSectionOne />
        <Features />
        <CallToAction />
      </div>
    </section>
  )
}
