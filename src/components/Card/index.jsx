import { useEffect, useState } from 'react';
import CustomButton from '../Button';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import parse from 'html-react-parser';
import style from './card.module.css';
export default function Card({
  imageUrl,
  title,
  description,
  stack,
  demo,
  github,
  credentialUrl,
  platform,
}) {
  //get window width screen
  const [widthScreen, setWidthScreen] = useState(null);
  useEffect(() => {
    const handleWindowResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <Fade
        direction='up'
        triggerOnce={true}
        cascade>
        <div className='relative overflow-hidden rounded-lg md:rounded-lg lg:rounded-lg shadow-lg shadow-neutral-400/60 dark:shadow-indigo-400/30  cursor-pointer group'>
          <Image
            src={imageUrl}
            alt={title}
            width={951}
            height={450}
            className='object-cover w-full group-hover:scale-110 transition-all duration-500'
            style={{
              width: 'auto',
              height: platform ? 'auto' : widthScreen < 576 ? '450px' : 'auto',
            }}
          />
          <div className='absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-neutral-900'></div>
          <div className='absolute bottom-3 left-0 lg:px-6 md:px-6 px-4 py-4 w-full'>
            {/*
            jika credential url ada, return text sertif
            jika null, return text project
            */}
            <h1
              className={`${
                credentialUrl
                  ? style['text-certificate']
                  : style['text-project']
              }`}>
              {title}
            </h1>
            {/*
            jika description  ada, return class description
            jika null, return style hidden
            */}
            <div
              className={`${
                description ? '' : 'hidden'
              } text-slate-300 text-base font-light link-description`}>
              {description === undefined ? '' : parse(description)}
            </div>
            <div
              className={`${
                platform ? 'mb-1 mt-2' : 'mb-2 mt-4'
              } flex flex-wrap lg:gap-2 md:gap-3 gap-2 border-b-[0.5px] border-neutral-50/60 pb-3`}>
              {/* 
                return stack jika ada,
                jika undefined, return platform cert
                */}
              {stack ? (
                stack?.map((stack, index) => (
                  <span
                    key={index}
                    className='text-[10px] text-white capitalize lg:text-[13px] md:text-[12px] rounded-full px-2 bg-gradient-purple'>
                    {stack.name}
                  </span>
                ))
              ) : (
                <span className='text-[10px] text-white capitalize lg:text-[13px] md:text-[12px] rounded-full px-2 bg-gradient-purple'>
                  {platform}
                </span>
              )}
            </div>
            {/*
             jika platform ada, return string kosong,
             jika platform undefined, return button link
              */}
            {platform ? (
              ''
            ) : (
              <div className='flex items-center gap-x-4 mt-4 mb-1'>
                <CustomButton
                  type='link'
                  isExternal
                  target='_blank'
                  isTransparentPurple
                  isRounded
                  href={demo}
                  className={`text-white px-8 py-1 ${
                    demo === null ? 'hidden' : ''
                  }`}>
                  Live
                </CustomButton>
                <CustomButton
                  type='link'
                  isExternal
                  target='_blank'
                  isTransparentPurple
                  isRounded
                  href={github}
                  className={`text-white px-8 py-1 ${
                    github === null ? 'hidden' : ''
                  }`}>
                  Github
                </CustomButton>
              </div>
            )}
          </div>
          {/*
             jika credentialUrl ada, return stretched link,
             jika credential url undefined, return string kosong
              */}
          {credentialUrl ? (
            <CustomButton
              className='z-10 absolute inset-0 bg-transparent'
              type='link'
              isExternal
              target='_blank'
              href={credentialUrl}></CustomButton>
          ) : (
            ''
          )}
        </div>
      </Fade>
    </>
  );
}
