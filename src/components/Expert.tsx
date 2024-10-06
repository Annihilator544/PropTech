import expert1 from '../images/expert1.svg'
import expert2 from '../images/expert2.svg'
import expert3 from '../images/expert3.svg'
import expert4 from '../images/expert4.svg'
import Image from 'next/image';

function Expert() {
  return (
  <div className='max-lg:mt-20'>
    <p className=" text-[42px] lora pb-20 max-lg:text-4xl max-lg:pb-10">Meet our expert real estate team</p>
    <div className="grid grid-cols-2 gap-10 max-lg:flex max-lg:flex-col">
        <Image src={expert1} alt="expert1" className='w-full' />
        <Image src={expert2} alt="expert2" className='w-full' />
        <Image src={expert3} alt="expert3" className='w-full' />
        <Image src={expert4} alt="expert4" className='w-full' />
    </div>
  </div>
);
}

export default Expert;