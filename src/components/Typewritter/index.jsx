import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const TypeWriter = ({ name, isLoop, isGradient, delay }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: name,
      startDelay: delay,
      typeSpeed: 85,
      backSpeed: 25,
      backDelay: 500,
      loop: isLoop,
    });

    return () => {
      typed.destroy();
    };
  }, [delay, name, isLoop]);

  return (
    <>
      {isGradient === 'orange' ? (
        <span
          className='bg-gradient-orange text-transparent bg-clip-text'
          ref={el}></span>
      ) : (
        <span
          className='bg-gradient-purple text-transparent bg-clip-text'
          ref={el}></span>
      )}
    </>
  );
};

export default TypeWriter;
