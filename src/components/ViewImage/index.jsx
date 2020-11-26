import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import './styles.scss';

const ViewImage360 = ({ id, srcImage, dataImages, className, loading }) => {
  useEffect(() => {
    console.log('load image');
    $.reel.scan();
  }, [loading]);

  console.log(id, srcImage, dataImages, className);

  return (
    <div className={className}>
      <img
        src={srcImage}
        width='100%'
        height='100%'
        id={id}
        className='reel'
        data-images={dataImages}
      ></img>
    </div>
  );
};

ViewImage360.propTypes = {
  srcImage: PropTypes.string.isRequired,
  dataImages: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

ViewImage360.defaultProps = {
  id: 'image-360',
};

export default React.memo(ViewImage360);
