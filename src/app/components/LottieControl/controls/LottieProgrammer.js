import React, { Fragment } from 'react'
import Lottie from 'react-lottie';

import * as aniProgramming from '../json/17343-programming.json';
 
const LottieProgrammer = ({ index }) => {

    const animationData = aniProgramming;

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

export default LottieProgrammer;
