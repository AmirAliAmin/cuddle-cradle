import React,{useState} from 'react'
import Hero from '../components/Hero'
import OurCollection from '../components/OurCollection'
import TopSelling from '../components/TopSelling'
import FAQs from '../components/FAQs'
import NewArrival from '../components/NewArrival'
import ExploreMore from '../components/ExploreMore'
import DisplayMenu from '../components/DisplayMenu'
import Policy from '../components/Policy'

export default function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <section>
      <Hero/>
      </section>
      <section>
      <OurCollection/>
      </section>
      <section>
      <TopSelling/>
      </section>
      <section>
      <NewArrival/>
      </section>
      <section>
      <ExploreMore category={category} setCategory={setCategory}/>
      </section>
      <section>
      <DisplayMenu category={category}/>
      </section>
      <section>
      <FAQs/>
      <Policy/>
      </section>
    </div>
  )
}