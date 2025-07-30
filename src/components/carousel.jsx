import { useRef } from 'react';
import { Carousel } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const countryImages = [
  {
    name: 'Japan',
    url: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80' // Mt. Fuji
  },
  {
    name: 'Australia',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' // Gold Coast beach
  },
  {
    name: 'Canada',
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80' // Moraine Lake
  },
  {
    name: 'Brazil',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80' // Rio
  },
  {
    name: 'South Africa',
    url: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1200&q=80' // Cape Town
  }
];


const CarouselComponent = () => {
  const carouselRef = useRef();

  const next = () => carouselRef.current.next();
  const prev = () => carouselRef.current.prev();

  return (
    <div
      style={{
        position: 'relative',
        margin: 'auto',
        border: '2px solid #3E3E3E',
        borderRadius: '0px',
        overflow: 'hidden'
      }}>
      <Carousel ref={carouselRef} autoplay dots>
        {countryImages.map((item, index) => (
          <div key={index}>
            <div style={{ position: 'relative' }}>
              <img
                src={item.url}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '0px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                }}
              />
              <h2
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  color: '#fff',
                  background: 'rgba(0,0,0,0.4)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  margin: 0,
                }}
              >
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>

      <div
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '20px',
          zIndex: 10,
        }}
      >
        <ArrowLeftOutlined
          onClick={prev}
          style={{
            fontSize: '24px',
            color: '#fff',
            cursor: 'pointer',
            background: 'rgba(0,0,0,0.4)',
            padding: '6px',
            borderRadius: '50%',
          }}
        />
        <ArrowRightOutlined
          onClick={next}
          style={{
            fontSize: '24px',
            color: '#fff',
            cursor: 'pointer',
            background: 'rgba(0,0,0,0.4)',
            padding: '6px',
            borderRadius: '50%',
          }}
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
