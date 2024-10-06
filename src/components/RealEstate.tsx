import Image from "next/image";
import company1 from "../images/company1.svg";
import company2 from "../images/company2.svg";
import company3 from "../images/company3.svg";
import company4 from "../images/company4.svg";
function RealEstate() {
  return (
    <div className=" mx-auto py-32">
      <div className="grid grid-cols-[80%,20%] lora">
        <div>
            <p className=" text-[42px]">Real Estate</p>
            <p className=" text-[42px]">Solutions Offered</p>
        </div>
        <p className="inter font-light text-[11px] my-auto">Covering everything from purchase and sales to 
            overseeing properties and delivering prime 
            investment guidance - our services encapsulate 
            all your property requirements with seasoned 
            proficiency.</p>
      </div>
      <div className="grid grid-cols-[80%,20%] lora py-10 border-b-[1px]">
        <Image src={company1} alt="company1" className="my-auto" />
        <p className="inter font-light text-[11px] my-auto">Whether purchasing or selling, to managing 
            properties and offering investment guidance, we 
            cater to all your needs.</p>
      </div>
      <div className="grid grid-cols-[80%,20%] lora py-10 border-b-[1px]">
        <Image src={company2} alt="company1" className="my-auto" />
        <p className="inter font-light text-[11px] my-auto">From acquiring and disposing to overseeing 
            properties and providing investment guidance, our 
            offerings encompass all.</p>
      </div>
      <div className="grid grid-cols-[80%,20%] lora py-10 border-b-[1px]">
        <Image src={company3} alt="company1" className="my-auto" />
        <p className="inter font-light text-[11px] my-auto">From purchasing and trading to managing 
            properties and providing investment counsel, we 
            encompass everything.</p>
      </div>
      <div className="grid grid-cols-[80%,20%] lora py-10 border-b-[1px]">
        <Image src={company4} alt="company1" className="my-auto" />
        <p className="inter font-light text-[11px] my-auto">From buying and selling to managing properties 
            and advising on investments, we furnish all-
            inclusive services.</p>
      </div>
    </div>
  );
}

export default RealEstate;