import React, { useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import InnerImageZoom from 'react-inner-image-zoom';
import './styles.scss';

const Test01 = () => {
  const [imageWidth, setImageWidth] = useState(0);

  const [showImageZoom, setShowImageZoom] = useState(false);
  useEffect(() => {
    console.log('load image');
    $.reel.scan();
  }, []);

  // const scrollImage = (e) => {
  //   const top = e.target.scrollTop;
  //   console.log('scrollImage', top);
  //   setImageWidth(top);
  //   $('#image-test').css({
  //     width: 500 + top + 'px',
  //   });
  // };

  const chooseImage = () => {
    setShowImageZoom(!showImageZoom);
  };

  const afterZoomIn = (e) => {
    console.log('afterZoomIn', e);
  };

  return (
    <div className='test-01'>
      <img
        src='/image/00000.jpg'
        width={500 + imageWidth}
        height={500 + imageWidth}
        id='image-test'
        className={`reel ${showImageZoom && 'hide-image-360'}`}
        data-images='/image/00###.jpg|000..143'
        data-frames='9'
        data-rows='16'
        data-row='2'
        data-responsive='true'
        // data-orbital='24'
        // data-speed='0.3'
        data-horizontal={false}
        // data-vertical={true}
      ></img>
      <InnerImageZoom
        src='/image/00000.jpg'
        zoomType='hover'
        className={!showImageZoom && 'hide-image-zoom'}
        // zoomSrc='/image/00019.jpg'
      />

      <div className='box-zoom-product' onClick={chooseImage}>
        <LeftOutlined />
        clik vào đây để phóng to sản phẩm
        <RightOutlined />
      </div>
    </div>
  );
};

export default React.memo(Test01);
