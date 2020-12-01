import React, { useState, useEffect } from 'react';
import { Button, Modal, Rate } from 'antd';
import PropTypes from 'prop-types';
import ViewImage360 from '../../../components/ViewImage';
import './styles.scss';
import Quantity from './Quantity';

const listImageSlider = ['01', '07', '13', '19', '25'];

const ModalProduct = ({ visible, setVisible, product }) => {
  const [activeColor, setActiveColor] = useState();
  const [loading, setLoading] = useState(false);
  const handleOk = () => {};

  console.log('product', product);

  const handleCancel = () => {
    setVisible();
  };

  const handleStepClick = (step) => {
    // if (step && $(`#${product.key}`) && $(`#${product.key}`).reel) {
    //   $(`#${product.key}`).reel('frame', +step);
    // }
  };

  const selectColor = (item) => {
    setActiveColor(item);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    if (!product) return;
    setActiveColor(product.colors[0]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [product]);

  if (!product) return;

  console.log('activeColor', activeColor);

  return (
    <Modal
      title='Basic Modal'
      centered
      className='modal-product'
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div className='flex h-full flex-wrap '>
        <div className='w-3/5 box-image-content'>
          <div className='box-image-product'>
            {!loading && activeColor && (
              <ViewImage360
                loading={loading}
                srcImage={`${product.imageUrl.start}/1/${product.imageUrl.end}${activeColor.key}`}
                dataImages={`${product.imageUrl.start}/##/${product.imageUrl.end}${activeColor.key}|1..32`}
                id={product.key}
              />
            )}
          </div>

          <div className='flex flex-wrap '>
            {activeColor &&
              listImageSlider.map((item) => (
                <img
                  key={item}
                  className='w-1/5 h-1/5 cursor-pointer'
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    handleStepClick(item);
                  }}
                  src={`${product.imageUrl.start}/${item}/${product.imageUrl.end}${activeColor.key}`}
                />
              ))}
          </div>
        </div>
        <div className=' w-2/5 p-4'>
          <div className='text-2xl'>Archibald Chair</div>
          <div className='text-xs text-opacity-50 '>BASE FABRIC</div>
          <div className='flex space-x-2'>
            {product &&
              activeColor &&
              (product.colors || []).map((item) => (
                <div
                  key={item.key}
                  className='box-product-color cursor-pointer'
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    selectColor(item);
                  }}
                >
                  <div
                    color={`#${item.color}`}
                    className='w-10 h-10 rounded-lg'
                  ></div>
                  {activeColor.color === item.color && (
                    <div className='active-color'> </div>
                  )}
                </div>
              ))}
          </div>
          <div className='my-2 text-2xl text-blue-500 font-semibold'>
            30.000.000 VND
          </div>
          <div className='my-2'>
            <Rate defaultValue={4.5} disabled allowHalf />
            <span>15 reviews</span>
          </div>
          <div className='uppercase'>description</div>
          <div>
            Inspired by italian grandeur with a touch of Scandinavian
            minimalism, the HANDVÄRK collection of sofas offers both a
            lightweight expression and a high level of comfort.
          </div>
          <div className='mt-2'>Color</div>
          <Quantity />
          <Button className='btn-add-to-card'>ADD TO CARD</Button>
        </div>
      </div>
    </Modal>
  );
};

ModalProduct.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func,
  product: PropTypes.object,
};

ModalProduct.defaultProps = {
  visible: false,
  setVisible: () => {},
  product: {},
};

export default React.memo(ModalProduct);
