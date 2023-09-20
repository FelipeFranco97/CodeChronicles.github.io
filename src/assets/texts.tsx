import { Navbar } from '@/types/nav.type'
import { HeroBannerIntroduction } from '@/types/introduction/hero-banner.type'

export const navBar: Navbar[] = [
  {
    titulo: 'CodeChronicles',
  },
]

export const heroBannerIntroduccion: HeroBannerIntroduction = {
  titulo: 'Introducción',
  url: '/introduction_banner.jpg',
  credits: (
    <>
      Photo by{' '}
      <a
        href='https://unsplash.com/@euwars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{textDecoration: 'none', color: '#D3D4D6'}}
      >
        Farzad
      </a>{' '}
      on{' '}
      <a
        href='https://unsplash.com/photos/p-xSl33Wxyc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{textDecoration: 'none', color: '#D3D4D6'}}
      >
        Unsplash
      </a>
    </>
  ),
}
