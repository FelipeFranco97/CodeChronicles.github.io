import Link from 'next/link'
import styles from './Header.module.scss'
import { Header } from '@/types/header.type'

function Header(props: Header) {

  return (
    <>
      <header className={styles.nav_menu}>
        <Link className={styles.h1_web_title} href='/'>
          {props.titulo}
        </Link>
      </header>
      <hr className={styles.hr} />
    </>
  )
}

export default Header
