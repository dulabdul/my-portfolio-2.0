import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import CustomButton from '../Button';

export default function ScrollToTop() {
  const [visible, setvisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setvisible(true);
    } else if (scrolled <= 300) {
      setvisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisible);
  }
  return (
    <CustomButton
      onClick={scrollToTop}
      className='items-center bg-[#F2672E] justify-center w-[50px] h-[50px] transition-all fixed bottom-[20px] md:bottom-[30px] right-[30px] hover:animate-pulse'
      isRoundedFull
      type='button'
      style={{ display: visible ? 'flex' : 'none' }}>
      <FaArrowUp className='text-white text-2xl' />
    </CustomButton>
  );
}
