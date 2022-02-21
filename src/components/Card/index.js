import styles from './style.module.css'

import React from 'react'

export default function Card({nome, pathImg}) {
  return (
    <div className={styles.container}>
        <img src={pathImg} alt={nome}/>
        <h1 className={styles.title}>{nome}</h1>
    </div>
  )
}
