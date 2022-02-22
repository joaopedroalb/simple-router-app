import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import styles from './style.module.css'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
        <div className={styles.navContainer}>
          <Nav/>
        </div>
        <div className={styles.childrenContainer}>
            {children}
        </div>
        <div className={styles.footerContainer}>
          <Footer/>
        </div>
    </div>
  )
}
