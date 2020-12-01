import React from 'react'
import './styles.scss'

const Demo02 = () => {
    return (
      <div>
        <div class='eye'></div>
        <div class='circle-1'></div>
        <div class='circle-2'></div>
        <div class='circle-3'></div>
        <div class='circle-4'></div>
        <div class='circle-5'></div>
        <div class='circle-6'></div>
        <div class='circle-7'></div>
        <div class='circle-8'></div>
        <div class='circle-9'></div>
        <div class='circle-10'></div>
        <div class='circle-11'></div>
        <div class='circle-12'></div>
        <div class='circle-13'></div>
        <div class='circle-14'></div>
        <div class='glitch'></div>
        <div class='fragment-1'></div>
        <div class='fragment-2'></div>
        <div class='fragment-3'></div>
        <svg
          width='190'
          height='190'
          viewBox='0 0 190 190'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <clipPath id='bagel1'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M95 190C147.467 190 190 147.467 190 95C190 42.533 147.467 0 95 0C42.533 0 0 42.533 0 95C0 147.467 42.533 190 95 190ZM95 120C108.807 120 120 108.807 120 95C120 81.1929 108.807 70 95 70C81.1929 70 70 81.1929 70 95C70 108.807 81.1929 120 95 120Z'
              />
            </clipPath>
            <clipPath id='bagel2'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M71 142C110.212 142 142 110.212 142 71C142 31.7878 110.212 0 71 0C31.7878 0 0 31.7878 0 71C0 110.212 31.7878 142 71 142ZM71 139C108.555 139 139 108.555 139 71C139 33.4446 108.555 3 71 3C33.4446 3 3 33.4446 3 71C3 108.555 33.4446 139 71 139Z'
              />
            </clipPath>
            <clipPath id='bagel3'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M60 120C93.1372 120 120 93.1372 120 60C120 26.8628 93.1372 0 60 0C26.8628 0 0 26.8628 0 60C0 93.1372 26.8628 120 60 120ZM60 115C90.3757 115 115 90.3757 115 60C115 29.6243 90.3757 5 60 5C29.6243 5 5 29.6243 5 60C5 90.3757 29.6243 115 60 115Z'
              />
            </clipPath>
            <clipPath id='bagel4'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76ZM38 72C56.7777 72 72 56.7776 72 38C72 19.2224 56.7777 4 38 4C19.2223 4 4 19.2224 4 38C4 56.7776 19.2223 72 38 72Z'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
}

export default React.memo(Demo02)