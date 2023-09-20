import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <section>
        <h1 className={styles.h1_title}>¿Qué ruta elegirás hoy?</h1>
        <article className={styles.article_container_images}></article>
      </section>
    </>
  )
}
