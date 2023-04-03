import { Button, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CustomButton from '../Button';
import { FiDownload } from 'react-icons/fi';
import styles from './Header.module.css';
export default function Header({ data }) {
  const menuList = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/',
    },
    {
      name: 'Project',
      href: '/',
    },
    {
      name: 'Certificate',
      href: '/',
    },
    {
      name: 'Contact',
      href: '/',
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
  return (
    <header className={`w-full z-50 fixed ${scrolledNav}`}>
      <div className='container mx-auto'>
        <Navbar
          fluid={true}
          rounded={true}>
          <Navbar.Brand
            href='/'
            className=''>
            <Image
              width={44}
              height={44}
              src='/images/brand.svg'
              alt='Abdul Rahman Logo'
            />
          </Navbar.Brand>
          <div className='flex md:order-2'>
            <CustomButton
              href={data?.CV}
              type='link'
              isExternal
              target='_blank'
              isGradientOrange
              isRounded
              isFlex
              isFull
              className='button text-white hover:bg-gradient-purple items-center mr-2 md:mr-0'>
              <FiDownload className='mr-1 text-lg' /> Get CV
            </CustomButton>
            <Navbar.Toggle className={styles.toggle} />
          </div>
          <Navbar.Collapse className='px-5 py-1 ul'>
            {menuList.map((item, index) => (
              <li
                key={index}
                className='mt-2'>
                <a
                  href={item.href}
                  className='text-hover'>
                  {item.name}
                </a>
              </li>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
