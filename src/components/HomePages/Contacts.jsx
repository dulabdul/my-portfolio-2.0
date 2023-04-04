import React from 'react';
import CustomButton from '../Button';
import { BsFillTelephoneFill } from 'react-icons/bs';
export default function Contacts({ reachMeRef }) {
  return (
    <section
      ref={reachMeRef}
      className='w-full h-full overflow-hidden px-6 py-12 md:py-28'>
      <div className='w-full container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-heading'>Get In Touch</h1>
          <p className='text-center mt-12 md:mt-16 text-slate-300 mb-8 md:mb-10 font-light text-xl md:text-2xl'>
            Please feel free to contact me if you have any question!
            <br />
            Or just wanna chat, please do not hesitate to reach out to me!
          </p>
          <CustomButton
            type='link'
            isExternal
            target='_blank'
            isRounded
            isFlex
            href='#'
            isTransparentPurple
            className='px-8 py-2 text-white text-2xl cursor-pointer items-center'>
            <BsFillTelephoneFill className='mr-2' /> Reach Me
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
