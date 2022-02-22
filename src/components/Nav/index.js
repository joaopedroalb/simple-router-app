import styles from './style.module.css'

import React from 'react'
import { useLocation, Link} from 'react-router-dom'

export default function Nav() {
  const path = useLocation().pathname

  return (
    <nav className={styles.container}>
      <Link to='/'>
        <button className={path==='/'?styles.active:''}>Produtos</button>
      </Link>

      <Link to='/contato'>
        <button className={path==='/contato'?styles.active:''}>Contato</button>
      </Link>
    </nav>
  )
}
