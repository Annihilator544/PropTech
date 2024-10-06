import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="flex-1 grid grid-rows-2 lora px-5">
      <div></div>
      <div>
        <p className=" text-[42px]">Unlock the home of</p>
        <p className=" text-[42px]">your dreams today</p>
        <div className="flex gap-6 mt-5">
            <Button variant={"defaultSecondary"}>Get Started</Button>
            <Button>Get Consultation</Button>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;