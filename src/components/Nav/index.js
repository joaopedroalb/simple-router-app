import styles from './style.module.css'

import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {

  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <NavLink className={styles.btnLink} to='/'>Produtos</NavLink>
        </li>

        <li>
          <NavLink className={styles.btnLink} to='/contato'>Contato</NavLink>
        </li>
      </ul>
    </nav>
  )
}
