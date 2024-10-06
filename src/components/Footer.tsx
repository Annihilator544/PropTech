import Image from 'next/image';
import footer from '../images/footer.svg'
import logo from '../images/Logo.svg'
import FooterIcons from '../images/footerIcons.svg';

function Footer() {
  return (
    <footer className="py-32 max-lg:py-10">
      <div className="grid grid-cols-[60%,40%] max-lg:flex max-lg:flex-col">
        <div>
            <p className="text-[42px] lora max-lg:text-4xl">Start your property </p>
            <p className="text-[42px] lora max-lg:text-4xl">journey now!</p>
            <p className="inter font-light text-[11px] my-5">Take the first step towards finding your dream home or perfect investment. Our 
            expert team is here to guide you through every stage of your real estate journey.</p>
        </div>
        <Image src={footer} alt="footer" className="ml-auto" />
      </div>
      <div className=' flex justify-between border-b-[1px] border-t-[1px] py-8 my-14 max-lg:flex max-lg:flex-col max-lg:gap-5'>
        <div>
            <p className='inter text-sm'>123 Elm Street, Suite 456 Cityville, State </p>
            <p className='inter text-sm'>78901 United States</p>
        </div>
        <p className='inter text-sm my-auto'>+1 (234) 567 - 8901</p>
        <p className='inter text-sm my-auto'>hello@PropVista.com</p>
      </div>
      <div className='flex justify-between'>
        <div className="lora flex gap-2">
            <Image src={logo} alt="logo" />
            <p className=" text-xl my-auto">PropVista</p>
        </div>
        <Image src={FooterIcons} alt="footerIcons" />
      </div>
    </footer>
  );
}

export default Footer;