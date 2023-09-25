'use client'

import styles from './page.module.scss'
import { useState } from 'react'

export default function Home() {
  const [articleVisible, setArticleVisible] = useState(false)

  const toggleArticle = () => {
    setArticleVisible(!articleVisible)
  }

  const changeColor = {
    backgroundColor: articleVisible ? '#D3D4D6' : '#222831'
  }
  return (
    <>
      <section className={styles.section_main}>
        <h1 className={styles.h1_title}>¿Qué ruta elegirás hoy?</h1>

        <section className={styles.section_routes}>
          <article className={styles.article_hr_container}>
            <hr className={styles.hr_guide} />
          </article>

          <article className={styles.article_main}>
            <article className={styles.article_route}>
              <div className={styles.div_empty}></div>

              <article className={styles.article_div_container}>
                <div
                  onClick={toggleArticle}
                  className={styles.div_circle}
                  style={changeColor}
                ></div>
              </article>

              <article className={`${styles.article_p_main} ${articleVisible ? styles.visible : styles.hidden}`}>
                <article className={styles.article_p_container}>
                  <h3>Introducción</h3>
                  <p>
                    Conceptos básicos antes de iniciar, ¿Qué es Web?, protocolos
                    importantes, internet y más.
                  </p>
                </article>
              </article>
            </article>
          </article>
        </section>
      </section>
    </>
  )
}
