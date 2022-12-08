import Lottie from 'react-lottie-player'

import lottieJson from '/public/lottie_developer.json';

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      // style={{ width: , height: 150 }}
    />
  )
}