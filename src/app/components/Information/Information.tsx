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
          {props.information.map((info, index) =>
            info.subtitulo ? (
              <article className={styles.article_main} key={index}>
                <h3 className={styles.h2_subtitle}>{info.titulo}</h3>
                <p className={styles.p}>{info.parrafo}</p>
              </article>
            ) : (
              <article className={styles.article_main} key={index}>
                <h1 className={styles.h1_title}>{info.titulo}</h1>
                <p className={styles.p}>{info.parrafo}</p>
              </article>
            )
          )}
        </section>

        <div className={styles.div_container}></div>
      </section>
    </>
  )
}

export default Information