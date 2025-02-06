import About from "@/components/About";
import Awards from "@/components/Awards";
import Hero from "@/components/Hero";
import RecentEvent from "@/components/RecentEvent";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="p-6">
      <Hero/>
      <RecentEvent/>
      <Awards/>
      <About/>
      <WhyChooseUs/>
      <Contact/>
    </div>
  )
}
