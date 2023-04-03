import Image from 'next/image';
import CustomButton from '../Button';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai';

export default function Footer({ data }) {
  const d = new Date();
  let year = d.getFullYear();

  function renderSwitch(param) {
    switch (param) {
      case 'Instragam':
        return <AiOutlineInstagram className='text-white text-3xl' />;
        break;
      case 'Linkedin':
        return <AiFillLinkedin className='text-white text-3xl' />;
        break;
      case 'Github':
        return <AiFillGithub className='text-white text-3xl' />;
        break;
      case 'Email':
        return <AiOutlineMail className='text-white text-3xl' />;
        break;
      default:
        break;
    }
  }

  return (
    <footer className='w-full h-full overflow-hidden px-6 py-8'>
      <div className='flex gap-y-1 items-center justify-center flex-col'>
        <div className='my-4'>
          <Image
            src='/images/brand.svg'
            alt='Logo Name'
            width={60}
            height={60}
          />
        </div>
        <p className='font-light text-base text-slate-400'>
          Designed & Created by Abdul
        </p>
        <p className='font-light text-base text-slate-400'>
          Build With Next JS & Tailwind CSS
        </p>
        <div className='flex items-center justify-center gap-x-4 pt-16 pb-12  md:py-14'>
          {data?.social.map((item, index) => (
            <CustomButton
              key={index}
              type='link'
              isRoundedFull
              isFlex
              isExternal
              target='_blank'
              href={item.url}
              className='w-[44px] h-[44px] items-center justify-center border border-indigo-500 ring-1 transition-all hover:bg-indigo-500'>
              {renderSwitch(item.name)}
            </CustomButton>
          ))}
        </div>
        <p className='font-light text-sm text-slate-400 text-center'>
          Copyright © {year} Abdul Rahman. <br className='block md:hidden' />{' '}
          All Rights Reversed
        </p>
      </div>
    </footer>
  );
}
