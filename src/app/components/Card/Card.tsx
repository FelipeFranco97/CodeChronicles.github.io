import Link from 'next/link'
import { Card } from '@/types/card.type'
import styles from './Card.module.scss'

interface CardProps {
  card: Card[]
}

export default function Card(props: CardProps) {
  return (
    <>
      <section className={styles.section_main}>
        {props.card.map((card, index) => (
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
