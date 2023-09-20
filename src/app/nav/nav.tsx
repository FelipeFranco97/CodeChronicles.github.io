import Link from 'next/link'
import styles from './nav.module.scss'
import { Navbar } from '@/types/nav.type'

function Navbar(props: Navbar) {

  return (
    <>
      <nav className={styles.nav_menu}>
        <Link className={styles.h1_web_title} href='/'>
          {props.titulo}
        </Link>
      </nav>
      <hr className={styles.hr} />
    </>
  )
}

export default Navbar
