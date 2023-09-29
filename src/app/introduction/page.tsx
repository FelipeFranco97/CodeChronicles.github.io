import { heroBannerIntroduccion } from '@/assets/texts'
import { middleTextIntroduction } from '@/assets/texts'
import { informationIntroduction } from '@/assets/texts'
import HeroBanner from '../components/HeroBanner/heroBanner'
import MiddleText from '../components/MiddleText/MiddleText'
import Information from '../components/Information/Information'

const Introduction = () => {

  return (
    <>
      <HeroBanner {...heroBannerIntroduccion}/>
      <MiddleText {...middleTextIntroduction}/>
      <Information information={informationIntroduction}/>
    </>
  )
}

export default Introduction
