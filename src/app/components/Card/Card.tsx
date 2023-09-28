import Link from 'next/link'
import { root } from '@/assets/texts'
import styles from './Card.module.scss'

export default function Card() {
  return (
    <>
      <section className={styles.section_main}>
        {root.map((card, index) => (
          <Link key={index} href={card.url} className={styles.link}>
            <h3 className={styles.h3_tag}>{card.tag}</h3>
            <h2 className={styles.h2_title}>{card.titulo}</h2>
            <p className={styles.p_information}>{card.contenido}</p>
          </Link>
        ))}
      </section>
    </>
  )
}
