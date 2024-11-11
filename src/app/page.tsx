"use client"

import { TopVectorSVG } from "@/assets";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import Details from "@/components/details";
import Review from "@/components/review";
import Partner from "@/components/partners";
import Footer from "@/components/footer";
import SpeedDial from "@/components/action-button";


export default function Home() {
  return (
    <div className="bg-primary-light dark:bg-primary-dark ">
      <SpeedDial />

      {/* main container  */}
      <main className="h-full relative">
        <TopVectorSVG className="absolute top-0 left-0 z-[1] w-full md:w-fit" />
        {/* top nav  */}
        <Navigation />

        {/* hero section  */}
        <Hero />

        {/* feature section  */}
        <Feature />

        {/* details section */}
        <Details />

        {/* review section  */}
        <Review />

        {/* partners section  */}
        <Partner />

        {/* footer section  */}
        <Footer />
      </main>


    </div>
  );
}
