import { Button, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CustomButton from '../Button';
import { FiDownload } from 'react-icons/fi';
import styles from './Header.module.css';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';

export default function Header({
  data,
  reachMeRef,
  discoverRef,
  certRef,
  projectRef,
}) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const menuList = [
    {
      name: 'Home',
      destination: {},
    },
    {
      name: 'About',
      destination: discoverRef?.current,
    },
    {
      name: 'Project',
      destination: projectRef?.current,
    },
    {
      name: 'Certificate',
      destination: certRef?.current,
    },
    {
      name: 'Contact',
      destination: reachMeRef?.current,
    },
  ];
  const [scrolledNav, setScrolledNav] = useState(null);

  const handlerScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      behavior: 'smooth',
    });
  };
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setScrolledNav('scrolled') : setScrolledNav('');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <header className={`w-full z-50 fixed ${scrolledNav}`}>
      <div className='container mx-auto'>
        <Navbar
          fluid={true}
          rounded={true}
          className='dark:bg-transparent'>
          <Navbar.Brand
            href='/'
            className=''>
            <Image
              width={64}
              height={64}
              src='/512x512.svg'
              alt='Abdul Rahman Logo'
            />
          </Navbar.Brand>
          <div className='flex md:order-2 gap-2'>
            <CustomButton
              href={data?.CV}
              type='link'
              ariaLabel={`visit cv`}
              isExternal
              target='_blank'
              isGradientOrange
              isRounded
              isFlex
              className='button text-white hover:bg-gradient-purple items-center mr-2 md:mr-0'>
              <FiDownload className='mr-1 text-lg' /> Get CV
            </CustomButton>
            <CustomButton
              type='button'
              ariaLabel='button change theme'
              isGradientPurple
              isRounded
              isFlex
              onClick={() =>
                theme === 'system'
                  ? setTheme('light')
                  : setTheme('dark') || theme === 'dark'
                  ? setTheme('light')
                  : setTheme('dark')
              }
              className={`button text-white hover:bg-gradient-purple items-center mr-2 md:mr-0 ${
                theme && 'place-content-end'
              }`}>
              <motion.div
                layout
                transition={spring}>
                <motion.div whileTap={{ rotate: 360 }}>
                  {theme !== 'system' ? (
                    theme === 'light' ? (
                      <RiSunFill className='h-6 w-6 text-yellow-300' />
                    ) : (
                      <RiMoonClearFill className='h-6 w-6 text-yellow-300' />
                    )
                  ) : theme === 'dark' ? (
                    <RiMoonClearFill className='h-6 w-6 text-yellow-300' />
                  ) : (
                    <RiSunFill className='h-6 w-6 text-yellow-300' />
                  )}
                </motion.div>
              </motion.div>
            </CustomButton>
            <Navbar.Toggle className={styles.toggle} />
          </div>
          <Navbar.Collapse className='px-5 py-1 ul'>
            {menuList.map((item, index) => (
              <li
                key={index}
                className='mt-2'>
                <CustomButton
                  ariaLabel='scroll button'
                  onClick={() => handlerScroll(item.destination)}
                  type='button'
                  className='text-hover'>
                  {item.name}
                </CustomButton>
              </li>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
