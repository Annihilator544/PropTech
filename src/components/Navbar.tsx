import Image from "next/image";
import logo from "../images/Logo.svg"
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b-[1px] border-b-[#FAFAFA33]">
      <div className="lora flex gap-2">
        <Image src={logo} alt="logo" />
        <p className=" text-xl my-auto">PropVista</p>
      </div>
      <Button variant={"defaultSecondary"}>Get Started</Button>
    </nav>
  );
}

export default Navbar;