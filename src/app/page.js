"use client"
import MyCarousel from "@/utils/carousel";
import ListGridProducts from "./components/list-grid-products";
import Slider from "./components/slider";
import Condominio from "./section/condominio";
import Solution from "./section/solution";


export default function Home() {
  return (
    <main>
    <Slider/>
    <ListGridProducts/>
    <Condominio/>
    <Solution/>

    
    </main>
  )
}
