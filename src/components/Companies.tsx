import Marquee from "./ui/marquee";
import company1 from "../images/company1.svg";
import company2 from "../images/company2.svg";
import company3 from "../images/company3.svg";
import company4 from "../images/company4.svg";
import Image from "next/image";

function Companies() {
  return (
    <Marquee pauseOnHover className="[--duration:20s]  py-8">
        <Image src={company1} alt="company1" />
        <div className="px-10"></div>
        <Image src={company2} alt="company2" />
        <div className="px-10"></div>
        <Image src={company3} alt="company3" />
        <div className="px-10"></div>
        <Image src={company4} alt="company4" />
        <div className="px-10"></div>
    </Marquee>
  );
}

export default Companies;