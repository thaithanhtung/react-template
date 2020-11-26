import React, { useState } from 'react';
import { Button } from 'antd';

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './styles.scss';

const Quantity = () => {
  const [number, setNumber] = useState(1);

  const minus = () => {
    if (number === 0) return;

    setNumber(number - 1);
  };

  const add = () => {
    setNumber(number + 1);
  };

  return (
    <div className='w-48 h-12 my-2 rounded-md bg-gray-300 flex box-quantity'>
      <Button className='btn-quantity ' onClick={minus}>
        <MinusOutlined size={16} />
      </Button>
      <div className='flex-auto flex justify-center items-center'>{number}</div>
      <Button className='btn-quantity ' onClick={add}>
        <PlusOutlined size={16} />
      </Button>
    </div>
  );
};

export default React.memo(Quantity);
