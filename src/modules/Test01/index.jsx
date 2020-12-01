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
        src='image02/000.jpg'
        width={500}
        height={500}
        id='image-test'
        className={`reel ${showImageZoom && 'hide-image-360'}`}
        data-images='image02/###.jpg|000..287'
        data-frames='24'
        data-frame='12'
        data-rows='12'
        data-row='6'
        data-cw='true'
        data-responsive='true'
        data-inversed='true'
        // data-shy={true} click nào hình mới bắt đầu khởi tạo
        // data-orbital='24'
        data-speed='0.2'
        // data-horizontal={false}
        // data-inversed={true}
        // rowlock={true}
        // data-orientable={true}
        // data-vertical={true}
      ></img>
      <InnerImageZoom
        src='image02/050.jpg'
        zoomType='hover'
        className={!showImageZoom && 'hide-image-zoom '}
        // afterZoomOut={setShowImageZoom}
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
