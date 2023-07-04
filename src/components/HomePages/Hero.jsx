/* eslint-disable @next/next/no-img-element */
import styles from './landing.module.css';
import CustomButton from '../Button';
import TypeWriter from '../Typewritter';
import { AiFillEye } from 'react-icons/ai';
import { MdOutlineWavingHand } from 'react-icons/md';
import { Fade, Zoom } from 'react-awesome-reveal';
import Image from 'next/image';

export default function Hero({ discoverRef, reachMeRef }) {
  const handlerScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      behavior: 'smooth',
    });
  };

  return (
    <section className='w-full h-[100vh] md:h-full overflow-hidden'>
      <div className='h-full md:h-[100vh] flex flex-col justify-center'>
        <Image
          src='/images/t-left.png'
          loading='eager'
          alt='T left'
          width={500}
          height={500}
          className='absolute inset-0'
        />
        <Image
          src='/images/Pill-Blue-Glossy.svg'
          width={500}
          height={500}
          className='w-[120px] h-[120px] -bottom-0 -left-6 md:w-[140px] md:h-[225px] absolute z-10 md:bottom-0 md:-left-4 animate-float'
          alt='Pill Blue Glossy'
        />
        <Image
          src='/images/RoundCube-Orange-Glossy.svg'
          width={500}
          height={500}
          className='w-[70px] h-[70px] bottom-[4%] right-0 md:w-[94px] md:h-[94px] absolute z-10 md:bottom-[4%] md:right-[25%] animate-float'
          alt='Round Cube Orange'
        />
        <Image
          src='/images/SuperToroid-Yellow-Glossy.svg'
          width={500}
          height={500}
          className='w-[200px] h-[200px] bottom-0 right-0 md:w-[252px] md:h-[252px] absolute md:bottom-0 animate-float'
          alt='SuperToroid Yellow Glossy'
        />

        <div
          className={`w-full container relative mx-auto flex flex-wrap md:flex-nowrap items-center px-6 md:px-12 py-16 justify-center rounded-2xl ${styles.bgBlur} `}>
          <img
            src='/images/Sphere-White-Matte.svg'
            className='w-[40px] h-[40px] top-[100px] right-[100px] md:w-[52px] md:h-[52px] absolute z-10 md:-top-[-20px] md:right-0 animate-float'
            alt=''
          />

          <div className='flex flex-col pt-16 gap-y-2 justify-start text-center md:text-start md:justify-center md:gap-y-6 w-full'>
            <Fade
              direction='up'
              cascade
              damping={0.2}
              triggerOnce={true}
              delay={200}>
              <h1 className='text-dark dark:text-light text-5xl  md:text-4xl font-semibold'>
                Hi There👋,
              </h1>

              <h1 className='text-dark dark:text-light text-4xl font-semibold '>
                I&apos;m{' '}
                <TypeWriter
                  delay={150}
                  name={['Abdul,']}
                  isGradient='orange'
                  isLoop={false}
                />
              </h1>

              <h1 className='text-dark dark:text-light text-2xl md:text-4xl font-semibold'>
                I am{' '}
                <TypeWriter
                  delay={750}
                  isLoop={true}
                  name={['Front-End Developer.']}
                />
              </h1>
              <p className='text-darkSecondary dark:text-lightSecondary normal-case'>
                Turning your idea into a cool produk with a good{' '}
                <span className='bg-gradient-orange text-transparent bg-clip-text'>
                  Web Developer.
                </span>
                <br />
                I&apos;am here to help your to turning idea to amazing product
              </p>
              <div className='flex flex-wrap md:flex-nowrap gap-y-8 md:gap-y-0 mt-4 md:mt-0 gap-x-4 justify-center md:justify-start'>
                <CustomButton
                  isFlex
                  ariaLabel='discover more section'
                  isTransparentOrange
                  isRounded
                  type='button'
                  onClick={() => handlerScroll(discoverRef.current)}
                  className='px-6 py-4 md:py-3 items-center text-dark dark:text-light hover:text-light text-xl animate-float'>
                  <AiFillEye className='mr-1' /> Discover More
                </CustomButton>
                <CustomButton
                  isFlex
                  isGradientPurple
                  isRounded
                  ariaLabel='reach me to discuss your idea'
                  onClick={() => handlerScroll(reachMeRef.current)}
                  type='button'
                  className='px-6 py-4 md:py-3 items-center text-light text-xl hover:bg-gradient-orange animate-float'>
                  <MdOutlineWavingHand className='mr-1' /> Reach me
                </CustomButton>
              </div>
            </Fade>
          </div>

          <div className='w-full h-full md:flex justify-center hidden'>
            <Zoom
              cascade
              triggerOnce={true}
              delay={200}>
              <Image
                src='/images/Salty-13.png'
                className='w-[420px] h-[420px]'
                width={500}
                height={500}
                alt='Salty'
              />
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
}
