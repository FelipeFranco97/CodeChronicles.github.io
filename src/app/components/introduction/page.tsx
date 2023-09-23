import { heroBannerIntroduccion } from '@/assets/texts'
import { middleText } from '@/assets/texts'
import { nav } from '@/assets/texts'
import { information } from '@/assets/texts'
import HeroBanner from './HeroBanner/heroBanner'
import MiddleText from './MiddleText/MiddleText'
import Information from './Information/Information'

const Introduction = () => {

  return (
    <>
      <HeroBanner {...heroBannerIntroduccion} />
      <MiddleText {...middleText}/>
      <Information nav={nav} information={information}/>
    </>
  )
}

export default Introduction
