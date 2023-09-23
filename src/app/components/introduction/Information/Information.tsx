import styles from './Information.module.scss'
import Link from 'next/link'
import { Nav } from '@/types/introduction/nav.type'
import { Information } from '@/types/introduction/information.type'

interface InformationProps {
  nav: Nav
  information: Information[]
}

const Information = (props: InformationProps) => {
  return (
    <>
      <section className={styles.section_main}>
        {/* <nav className={styles.nav_sections}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link className={styles.link_sections} href=''>
                {props.nav.titulo}
              </Link>
            </li>
            <ul className={styles.ul}>
              {props.nav.subtitulo?.map((subtitulo, index) => (
                <li className={styles.li} key={index}>
                  <Link
                    className={styles.link_sections}
                    href=''
                  >
                    {subtitulo.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </nav> */}

        <hr className={styles.hr_separator} />

        <section className={styles.section_info}>
          {props.information.map((info, index) =>
            info.subtitulo ? (
              <article className={styles.article_main} key={index}>
                <h2 className={styles.h2_subtitle}>{info.titulo}</h2>
                <p className={styles.p}>{info.paragraph}</p>
              </article>
            ) : (
              <article className={styles.article_main} key={index}>
                <h1 className={styles.h1_title}>{info.titulo}</h1>
                <p className={styles.p}>{info.paragraph}</p>
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
