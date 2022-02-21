import styles from './style.module.css'

import React from 'react'

export default function Nav() {
  return (
    <div className={styles.container}>
        <button className={styles.active}>Produtos</button>
        <button>Contato</button>
    </div>
  )
}
