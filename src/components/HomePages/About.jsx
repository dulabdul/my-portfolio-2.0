import Image from 'next/image';
import React from 'react';
import style from './landing.module.css';
import { Skills } from '..';
import { Fade } from 'react-awesome-reveal';

export default function About() {
  return (
    <>
      <section className='w-full h-full px-6 py-16 overflow-hidden '>
        <Fade
          direction='up'
          cascade
          triggerOnce={true}>
          <h1 className='text-heading'>About Me</h1>
        </Fade>

        <div className='w-full container px-2 py-16 md:px-16 mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-y-12'>
          <Fade
            direction='up'
            cascade
            triggerOnce={true}>
            <div className='w-full h-full overflow-hidden'>
              <div className={style['profile-img']}></div>
            </div>
          </Fade>
          <Fade
            direction='up'
            cascade
            triggerOnce={true}>
            <div className='w-full h-full'>
              <p className='text-slate-400 md:leading-relaxed leading-6'>
                Hi there! My name is Abdul Rahman, currently, i&apos;m full time
                working as IT Application Support at a software company in
                Jakarta, I have a side hustle as a freelancer web developer with
                experiences two-year, technology I used to build a website like
                Html, CSS, Javascript, React Js, Next Js, Bootstrap, Tailwind
                CSS, MongoDB, and Node Js.
              </p>
              <br />
              <p className='text-slate-400  md:leading-relaxed leading-6'>
                Possess strong skills in designing, developing, and slicing
                design to code. Data-driven and creative in finding solutions to
                complex problems. Love to develop innovative applications that
                enable creativity.
              </p>
              <br />
              <p className='text-slate-400  md:leading-relaxed leading-6'>
                I love the entire process of developing creative websites. It
                allows me to create something both beautiful and functional. I
                want to continue improving the skills that can enable me to be
                more creative and be able to build visually appealing websites.
              </p>
            </div>
          </Fade>
        </div>
      </section>
      <Skills />
    </>
  );
}
