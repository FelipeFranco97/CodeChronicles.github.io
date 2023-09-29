import styles from './page.module.scss'
import Card from './components/Card/Card'
import { heroBannerRoot, cardRoot } from '@/assets/texts'
import HeroBanner from './components/HeroBanner/heroBanner'

export default function Home() {
  return (
    <>
      <HeroBanner {...heroBannerRoot}/>
      <section className={styles.section_main}>
        <h1 className={styles.h1_title}>¿Qué ruta elegirás hoy?</h1>

        <section className={styles.section_cards}>
          <Card card={cardRoot}/>
        </section>
      </section>
    </>
  )
}
