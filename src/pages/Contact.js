import styles from '../styles/Contact.module.css'
import React from 'react'

export default function Contact() {
    const IMAGE_KEYBOARD = "https://cdn.discordapp.com/attachments/469630958811742212/945325244661497906/M25C325A1quina2Bde2Bescrever2Bna2Bdecora25C325A725C325A3o_De2Bvolta2Bao2Bretr25C325B4_11.png"

  return (
        <section className={`${styles.contactContainer} animeLeft`}>
            <img src={IMAGE_KEYBOARD} alt='Keyboard'/>
            <article>
                <h1>
                    Entre em contato
                </h1>
                <ul className={styles.infoContainer}>
                    <li>joaopedroalb.dev@gmail.com</li>
                    <li>99999-9999</li>
                    <li>R. Aqui do lado</li>
                </ul>
            </article>
        </section>
  )
}
