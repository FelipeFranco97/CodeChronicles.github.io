import { heroBannerIntroduccion } from '@/assets/texts'
import { middleText } from '@/assets/texts'
import { informationIntroduction } from '@/assets/texts'
import HeroBanner from '../components/HeroBanner/heroBanner'
import MiddleText from '../components/MiddleText/MiddleText'
import Information from '../components/Information/Information'

const Introduction = () => {

  return (
    <>
      <HeroBanner {...heroBannerIntroduccion}/>
      <MiddleText {...middleText}/>
      <Information information={informationIntroduction}/>
    </>
  )
}

export default Introduction
