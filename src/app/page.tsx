import styles from './page.module.scss'

export default function Home() {
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
                <div className={styles.div_circle}></div>
              </article>
              <article className={styles.article_p_container}>
                <p className={styles.p_title}>Introducción <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit autem similique magni numquam quos iusto architecto provident nisi aliquam error impedit esse porro sunt, molestiae tempore eaque reprehenderit iure!</p>
              </article>
            </article>
          </article>
        </section>
      </section>
    </>
  )
}
