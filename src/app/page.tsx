import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero_Section";
import Footer from "./Components/Footer";
import Brand from "./Components/Brand";
import Ceramics from "./Components/Ceramics";
import Products from "./Components/Products"
import ClubJoin from "./Components/Club";
import Studio from "./Components/Studio"
import About from "./Components/About";
import NavAbout from "./Components/AboutNav";
import Aboutfooter from "./Components/Aboutfooter"
import ListiningProduct from "./Components/ListiningProduct"
import Cart from "./Components/Cart";
export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <Brand/>
    <Ceramics/>
    <Products/>
    <ClubJoin/>  
      <Studio />  
    <Footer/>
    <NavAbout/>
    <About/>
    <Aboutfooter/>
    <ListiningProduct/>
    <ClubJoin/>
    <Footer/>
    <Navbar/>
    <Cart/>
    <Footer/>
    

   </div>
  );
}
