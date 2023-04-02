/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from './landing.module.css';
export default function Hero() {
  return (
    <section className='w-full h-full md:h-auto overflow-hidden'>
      <div className='h-full md:h-[100vh] bg-gradient-to-br from-[#121212] from-25%  to-[#1E3A8A] flex flex-col justify-center'>
        <img
          src='/images/t-left.png'
          alt=''
          className='absolute inset-0'
        />
        <img
          src='/images/b-right.png'
          alt=''
          className='hidden md:block absolute right-0 bottom-0'
        />
        <img
          src='/images/Pill-Blue-Glossy.svg'
          className='w-[120px] h-[120px] -bottom-0 -left-6 md:w-[140px] md:h-[225px] absolute z-10 md:bottom-0 md:-left-4 animate-bounce'
          alt=''
        />
        <img
          src='/images/RoundCube-Orange-Glossy.svg'
          className='w-[70px] h-[70px] bottom-[4%] right-0 md:w-[94px] md:h-[94px] absolute z-10 md:bottom-[4%] md:right-[25%] animate-bounce'
          alt=''
        />
        <img
          src='/images/SuperToroid-Yellow-Glossy.svg'
          className='w-[200px] h-[200px] bottom-0 right-0 md:w-[252px] md:h-[252px] absolute md:bottom-0 md:-right-14'
          alt=''
        />

        <div
          className={`w-full container relative mx-auto flex flex-wrap md:flex-nowrap items-center px-6 md:px-12 py-16 justify-center rounded-2xl ${styles.bgBlur} `}>
          <img
            src='/images/Sphere-White-Matte.svg'
            className='w-[40px] h-[40px] top-[100px] right-[100px] md:w-[52px] md:h-[52px] absolute z-10 md:-top-[-20px] md:right-0 animate-bounce'
            alt=''
          />
          <div className='flex flex-col pt-8 gap-y-2 justify-start md:justify-center md:gap-y-6 w-full'>
            <h1 className='text-white text-4xl font-semibold'>Hi There👋,</h1>
            <h1 className='text-white text-4xl font-semibold '>
              I&apos;m{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]'>
                Abdul
              </span>
            </h1>
            <h2 className='text-white text-4xl font-semibold'>
              I am{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]'>
                Front End Web Developer
              </span>
            </h2>
            <p className='text-white '>
              Turning Your Idea Into A Cool Produk With A Good Web Developer.
              <br />
              Iam Here To Help Your To Turning Idea To Amazing Product
            </p>
          </div>
          <div className='w-full h-full flex justify-center '>
            <img
              src='/images/Salty-13.png'
              className='w-[420px] h-[420px]'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}
