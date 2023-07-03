import React from 'react';
import style from './landing.module.css';
import { Skills } from '..';
import { Fade } from 'react-awesome-reveal';

export default function About({ discoverRef }) {
  return (
    <>
      <section
        ref={discoverRef}
        className='w-full h-full px-6 py-16 overflow-hidden '>
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
              <p className='dark:text-slate-400 text-darkSecondary md:leading-relaxed leading-6'>
                Hi there! My name is Abdul Rahman, I have professional
                experienced as IT Support Specialist almost two years and i have
                freelance experienced Front End Web Developer with a passion for
                creating engaging and user-friendly digital experiences. I
                possess a strong skill set in HTML, CSS 3, Javascript, React JS,
                Node JS, Next JS, MongoDb, PWA, Tailwindcss, Bootstrap, Figma,
                Git, Jira, Typescripts, and Material UI
              </p>
              <br />
              <p className='dark:text-slate-400 text-darkSecondary  md:leading-relaxed leading-6'>
                Throughout my career, I have successfully delivered numerous
                projects, collaborating closely with clients and
                cross-functional teams to develop intuitive and visually
                appealing websites. My expertise lies in crafting responsive
                designs that seamlessly adapt to various devices and screen
                sizes, ensuring an exceptional user experience across platforms.
                Also experience in providing exceptional technical assistance
                and troubleshooting solutions
              </p>
              <br />
              <p className='dark:text-slate-400 text-darkSecondary  md:leading-relaxed leading-6'>
                I remain open to exploring opportunities in any sector, as I
                believe in continuously expanding my horizons and embracing new
                challenges.
              </p>
              <p className='dark:text-slate-400 text-darkSecondary  md:leading-relaxed leading-6'>
                To get a better sense of my work, I invite you to visit my
                portfolio website at https://ar-portofolio.my.id. There, you
                will find a collection of my projects that showcase my technical
                skills and creative problem-solving abilities.
              </p>
              <p className='dark:text-slate-400 text-darkSecondary  md:leading-relaxed leading-6'>
                If {"you're"} seeking a dedicated Front End Web Developer who
                can bring your ideas to life and elevate your digital presence,
                I would love to connect with you. {"Let's"} collaborate and
                create remarkable web experiences together. Reach out to me via
                LinkedIn or through the contact information provided on my
                portfolio website.
              </p>
              <p className='dark:text-slate-400 text-darkSecondary  md:leading-relaxed leading-6'>
                {"Let's"} build something amazing together!
              </p>
            </div>
          </Fade>
        </div>
      </section>
      <Skills />
    </>
  );
}
