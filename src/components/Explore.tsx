import { Button } from "./ui/button";
import property1 from "../images/property1.svg";
import property2 from "../images/property2.svg";
import property3 from "../images/property3.svg";
import property4 from "../images/property4.svg";
import Image from "next/image";

function Explore() {
  return (
    <div className="py-32">
      <div className="grid grid-cols-[80%,20%] lora mb-10">
        <div>
            <p className=" text-[42px]">Explore our Featured</p>
            <p className=" text-[42px]">Properties Today</p>
        </div>
        <Button className="mt-auto ml-auto" variant={"defaultSecondary"}>All Properties</Button>
      </div>
      <div className=" flex flex-col gap-6">
        <Image src={property1} alt="property1" className="w-full" />
        <Image src={property2} alt="property2" className="w-full" />
        <Image src={property3} alt="property3" className="w-full" />
        <Image src={property4} alt="property4" className="w-full" />
      </div>
    </div>
  );
}

export default Explore;