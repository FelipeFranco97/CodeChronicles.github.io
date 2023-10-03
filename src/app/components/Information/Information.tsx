'use client'

import { Img } from 'react-image'
import styles from './Information.module.scss'
import { Information } from '@/types/information.type'

interface InformationProps {
  information: Information[]
}

const Information = (props: InformationProps) => {
  return (
    <>
      <section className={styles.section_main}>
        <hr className={styles.hr_separator} />
        <section className={styles.section_info}>
          {props.information.map((info, index) => (
            <article className={styles.article_main} key={index}>
              {info.titulo?.h1 && (
                <h1 className={styles.h1_title}>{info.titulo.h1}</h1>
              )}
              {info.titulo?.h2 && (
                <h2 className={styles.h2_subtitle}>{info.titulo.h2}</h2>
              )}
              {info.titulo?.h3 && (
                <h3 className={styles.h3_subtitle}>{info.titulo.h3}</h3>
              )}
              <p className={styles.p_parrafo}>{info.parrafo}</p>
              {info.urlServer === '' || info.urlLocal === '' ? (
                <></>
              ) : (
                <article className={styles.image_container}>
                  <Img
                    className={styles.image}
                    src={[info.urlServer || '', info.urlLocal || '']}
                  ></Img>
                </article>
              )}
              {info.codigo ? (
                <article className={styles.container_pre}>
                  <pre className={styles.pre_code}>
                    <code className={styles.code}>{info.codigo}</code>
                  </pre>
                </article>
              ) : (
                <></>
              )}
            </article>
          ))}
        </section>
        <div className={styles.div_container}></div>
      </section>
    </>
  )
}
export default Information
