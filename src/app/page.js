"use client"
import MyCarousel from "@/utils/carousel";
import ListGridProducts from "./components/list-grid-products";
import Slider from "./components/slider";
import Condominio from "./section/condominio";
import Solution from "./section/solution";
import FilterHome from "./components/filter-home";


export default function Home() {
  return (
    <main>
    <Slider/>
    <FilterHome/>
    <ListGridProducts/>
    <Condominio/>
    <Solution/>

    
    </main>
  )
}
