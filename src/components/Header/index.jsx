import { Button, Navbar } from 'flowbite-react';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolledNav, setScrolledNav] = useState(null);
  const handlerScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      behavior: 'smooth',
    });
  };
  const listenScrollEvent = () => {
    window.scrollY > 50 ? setScrolledNav('scrolled') : setScrolledNav('');
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
            <Button>Get started</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className='px-5 py-1 ul'>
            <li>
              <a
                href='#'
                className='text-hover'>
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-hover'>
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-hover'>
                Project
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-hover'>
                Certificate
              </a>
            </li>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
