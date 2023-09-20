import { heroBannerIntroduccion } from '@/assets/texts'
import Image from 'next/image'
import styles from './page.module.scss'

const Introduccion = () => {

  return (
    <>
      <section className={styles.section_main}>
        <section className={styles.section_container}>
          <article className={styles.article_background}>
            <Image
              src={heroBannerIntroduccion.url}
              alt=''
              width={600}
              height={300}
              className={styles.image_background}
            />
            <article className={styles.article_credits}>
              <p className={styles.p_credits}>{heroBannerIntroduccion.credits}</p>
            </article>
          </article>
        </section>
        <article className={styles.article_titulo}>{heroBannerIntroduccion.titulo}</article>
      </section>
    </>
  )
}

export default Introduccion
