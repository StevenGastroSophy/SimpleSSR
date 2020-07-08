import React, { Fragment } from 'react'
import Lottie from 'react-lottie';

import * as aniPageNotFound from '../json/lf30_editor_d4yCij.json';
 
const LottiePageNotFound = () => {

    const animationData = aniPageNotFound;

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

export default LottiePageNotFound;