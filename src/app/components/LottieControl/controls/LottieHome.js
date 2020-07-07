import React, { Fragment } from 'react'
import Lottie from 'react-lottie';

import * as aniRenderInProgress from '../json/lf30_editor_8F0bw1.json';
import * as aniGenerateLayout from '../json/lf30_editor_tdHpHl.json';
 
const LottieHome = ({ index }) => {

    const animations = [
      aniRenderInProgress,
      aniGenerateLayout,
    ];

    const animationData = animations[
      (index === undefined) ? Math.floor(Math.random()*animations.length) : index
    ];

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return (
      <Fragment>
        <Lottie 
          options={defaultOptions}
          height={'100%'}
          width={'100%'}
        />
      </Fragment>
    )
}

export default LottieHome;
