'use client'

import { Img } from 'react-image'
import styles from './heroBanner.module.scss'
import { HeroBanner } from '@/types/hero-banner.type'

const HeroBanner = (props: HeroBanner) => {
  return (
    <section className={styles.section_main}>
      <section className={styles.section_container}>
        <article className={styles.article_background}>
          {props.urlServer === '' || props.urlLocal === '' ? (
            <div className={styles.background_root}></div>
          ) : (
            <Img
              className={styles.image_background}
              src={[props.urlServer, props.urlLocal]}
            ></Img>
          )}
          <article className={styles.article_credits}>
            <p className={styles.p_credits}>{props.credits}</p>
          </article>
        </article>
      </section>
      <article className={styles.article_titulo}>{props.titulo}</article>
    </section>
  )
}

export default HeroBanner
