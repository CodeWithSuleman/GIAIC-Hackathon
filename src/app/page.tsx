import BestProducts from "./home-page/bestProducts-section";
import DontMiss from "./home-page/dontMiss-section";
import Essential from "./home-page/essential-section";
import Featured from "./home-page/featured-section";
import GearUp from "./home-page/gearup-section";
import HeroSection from "./home-page/hero-section";

export default function Home() {
  return( 
  <div >
    <HeroSection/>
    <BestProducts/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
  </div>);
}
