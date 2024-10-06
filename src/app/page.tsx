import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="w-[70%] mx-auto flex flex-col h-screen text-white">
          <Navbar />
          <Hero />
        </div>
      </div>
      
    </>
  );
}
