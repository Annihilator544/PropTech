import Companies from "@/components/Companies";
import Expert from "@/components/Expert";
import Explore from "@/components/Explore";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RealEstate from "@/components/RealEstate";


export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="w-[70%] max-lg:w-full mx-auto flex flex-col h-screen text-white">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="bg-black text-white">
        <Companies />
        <div className="w-[80%] mx-auto max-lg:w-full max-lg:px-4">
          <RealEstate />
          <Explore />
          <Expert />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
}
