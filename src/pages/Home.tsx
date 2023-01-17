import React from 'react';
import ReactPlayer from 'react-player';
import VideoPlayer from '../components/videoPlayer';
import { videoArray } from '../utils/mockDb';
import AfricanMap from '../components/AfricanMap';

function Home() {
  return (
    <>
      <div className='bg-white dark:bg-gray-800 '>
        <div className='carousel w-full'>
          <div id='slide1' className='carousel-item relative w-full'>
            <img src='https://placeimg.com/800/100/arch' className='w-full' />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide4' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide2' className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
          <div id='slide2' className='carousel-item relative w-full'>
            <img src='https://placeimg.com/800/100/nature' className='w-full' />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide1' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide3' className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
          <div id='slide3' className='carousel-item relative w-full'>
            <img src='https://placeimg.com/800/100/tech' className='w-full' />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide2' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide4' className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
          <div id='slide4' className='carousel-item relative w-full'>
            <img src='https://placeimg.com/800/100/any' className='w-full' />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide3' className='btn btn-circle'></a>
              <a href='#slide1' className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <AfricanMap />
    </>
  );
}

export default Home;
