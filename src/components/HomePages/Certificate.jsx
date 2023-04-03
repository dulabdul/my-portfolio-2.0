import { useState } from 'react';
import { Card, CertCard } from '..';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

export default function Certificate({ data }) {
  const [indexOfImages, setIndexOfImages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const openModalAndSetIndex = (index) => {
    setShowModal(true);
    setIndexOfImages(index);
    //   const ref = hideNavRef.current;
    //   ref.style.display = 'none';
    return;
  };
  const modalOpenHandler = () => {
    setShowModal(true);
    //   const ref = hideNavRef.current;
    //   ref.style.display = 'none';
  };
  return (
    <section className='w-full h-full overflow-hidden px-6'>
      <h1 className='text-heading'>Certificate</h1>
      <div className='w-full mx-auto container py-8'>
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 py-12'>
          {data?.map((cert, index) => (
            <div key={index}>
              <Card
                imageUrl={cert.imageUrl}
                title={cert.title}
                credentialUrl={cert.credentialUrl}
                platform={cert.platform}
              />
            </div>
          ))}
        </div>
        {showModal && (
          <Lightbox
            mainSrc={data[indexOfImages].imageUrl}
            onImageLoad={() => {
              window.dispatchEvent(new Event('resize'));
            }}
            imageTitle={`${indexOfImages + 1} / ${data.length}`}
            imageCaption={data[indexOfImages].title}
            nextSrc={data[(indexOfImages + 1) % data.length].imageUrl}
            prevSrc={
              data[(indexOfImages + data.length - 1) % data.length].imageUrl
            }
            onCloseRequest={() => setShowModal(false)}
            onMovePrevRequest={() =>
              setIndexOfImages((indexOfImages + data.length - 1) % data.length)
            }
            onMoveNextRequest={() =>
              setIndexOfImages((indexOfImages + data.length + 1) % data.length)
            }
          />
        )}
      </div>
    </section>
  );
}
