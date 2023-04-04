import useData from '@/hooks/useData';
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';

export default function Skills() {
  const { data, isLoading, isError } = useData();
  return (
    <section className='w-full h-full overflow-hidden'>
      <Slide
        direction='left'
        cascade
        triggerOnce={true}
        delay={200}>
        <div className='bg-slate-300 dark:bg-[#0b0b0b65]'>
          <div className='container mx-auto flex items-center justify-center gap-3 flex-wrap py-6'>
            {data?.skills.map((item, index) => (
              <div key={index}>
                <Image
                  width={60}
                  height={60}
                  src={item.imageUrl}
                  alt={item.name}
                  className='w-[100px] h-full'
                />
              </div>
            ))}
          </div>
        </div>
      </Slide>
    </section>
  );
}
