import { MiddleText } from '@/types/middle-text.type'
import styles from './MiddleText.module.scss'

const MiddleText = (props: MiddleText) => {
  return (
    <>
      <section className={styles.section_midtext}>
        <article className={styles.article_midtext}>
          <h1 className={styles.h1_midtext}>
            {props.titulo}
          </h1>
          <p className={styles.p_midtext}>{props.texto}</p>
        </article>
      </section>
      <hr className={styles.hr} />
    </>
  )
}

export default MiddleText
