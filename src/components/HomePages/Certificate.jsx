import { useState } from 'react';
import { Card } from '..';
import CustomButton from '../Button';
import { CgMoreO } from 'react-icons/cg';

export default function Certificate({ data, certRef }) {
  const [visible, setVisible] = useState(6);

  const showMore = () => {
    setVisible((visible) => visible + 3);
  };
  return (
    <section
      ref={certRef}
      className='w-full h-full overflow-hidden px-6 py-12'>
      <h1 className='text-heading'>Certificate</h1>
      <div className='w-full mx-auto container py-8'>
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 py-12'>
          {data?.slice(0, visible).map((cert, index) => (
            <div key={index}>
              <Card
                imgLightBox={() => openModalAndSetIndex()}
                imageUrl={cert.imageUrl}
                title={cert.title}
                credentialUrl={cert.credentialUrl}
                platform={cert.platform}
              />
            </div>
          ))}
        </div>
        <div className='flex justify-center py-4 md:py-8'>
          {visible < data?.length ? (
            <CustomButton
              type='button'
              onClick={showMore}
              isFlex
              isRounded
              isTransparentPurple
              className='items-center text-2xl justify-center text-white px-8 py-2'>
              <CgMoreO className='mr-2' /> Load More
            </CustomButton>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
}
