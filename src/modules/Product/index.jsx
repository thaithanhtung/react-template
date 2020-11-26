import React, { useState } from 'react';
import ModalProduct from './ModalProduct';
import './styles.scss';

const listProduct = [
  {
    id: 1,
    key: 'chair',
    name: 'ghế đơn',
    url: 'https://www.cylindo.com/wp-content/uploads/box_sku_1.jpg',
    imageUrl: {
      start:
        'https://content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames',
      end: 'ARCHIBALDCHAIR.JPG?background=FFFFFF&feature=3:',
    },
    colors: [
      { key: 'AZUL', color: '2F7A76' },
      { key: 'DIASPRO', color: 'D9541B' },
      { key: 'FANGO', color: '2F271A' },
      { key: 'ZOLFO', color: '898227' },
    ],
  },
  // {
  //   id: 2,
  //   key: 'chair table',
  //   name: 'bàn ghế',
  //   url: 'https://www.cylindo.com/wp-content/uploads/box_sku_2.jpg',
  //   srcImage:
  //     'https://content.cylindo.com/api/v2/4472/products/HAYS.WOODEN.TBLE.RCTNGL-36X60/frames/1/HAYS.WOODEN.TBLE.RCTNGL-36X60.JPG?background=FFFFFF&feature=1:NT-3335-12&feature=2:LEG102-2&feature=CHAIR%20SET:4&feature=TABLE%20LEGS:LEG200-5&feature=TABLE%20TOP:TOP-WALNUT&feature=CHAIR:LINA%20DINING%20CHAIR',
  //   dataImages:
  //     'https://content.cylindo.com/api/v2/4472/products/HAYS.WOODEN.TBLE.RCTNGL-36X60/frames/##/HAYS.WOODEN.TBLE.RCTNGL-36X60.JPG?background=FFFFFF&feature=1:NT-3335-12&feature=2:LEG102-2&feature=CHAIR%20SET:4&feature=TABLE%20LEGS:LEG200-5&feature=TABLE%20TOP:TOP-WALNUT&feature=CHAIR:LINA%20DINING%20CHAIR',
  //   colors: [
  //     { key: 'AZUL', color: '2F7A76' },
  //     { key: 'DIASPRO', color: 'D9541B' },
  //     { key: 'FANGO', color: '2F271A' },
  //     { key: 'ZOLFO', color: '898227' },
  //   ],
  // },

  {
    id: 3,
    key: 'sofa',
    name: 'sofa',
    url: 'https://www.cylindo.com/wp-content/uploads/box_sku_3.jpg',
    imageUrl: {
      start:
        'https://content.cylindo.com/api/v2/4404/products/BINETTI_RETRO_SOFA/frames',
      end: 'BINETTI_RETRO_SOFA.JPG?background=FFFFFF&feature=FABRIC%20COLOR:',
    },
    colors: [
      { key: 'CEMENT', color: 'a6a2a3' },
      { key: 'CHARCOAL', color: '515151' },
      { key: 'NAVY', color: '5e7c9e' },
    ],
  },
];

const Product = () => {
  const [currentProduct, setCurrentProduct] = useState(listProduct[1]);
  const [showModalProduct, setShowModalProduct] = useState(true);

  const changeProduct = (product) => {
    setShowModalProduct(true);
    setCurrentProduct(product);
  };

  const closeModal = () => {
    setShowModalProduct(false);
  };

  return (
    <div className='w-full flex  flex-wrap bg-gray-200 h-screen content-center space-x-4 2xl:p-24 xl:p-18 lg:p-16 md:p-10 sm:p-4'>
      {listProduct.map((item) => (
        <div
          key={item.id}
          className='flex-1 bg-white rounded-lg box-shadow-product'
          onClick={() => changeProduct(item)}
        >
          <img className='rounded-lg' src={item.url} />
        </div>
      ))}
      <ModalProduct
        visible={showModalProduct}
        product={currentProduct}
        setVisible={closeModal}
      />
    </div>
  );
};

export default React.memo(Product);
