import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(()=>{
    const fetchData = async () =>{
      const res = await fetch('https://ranekapi.origamid.dev/json/api/produto')
      const json = await res.json()
      console.log(json)
      setData(json)
    }

    fetchData();
  },[])

  return (
    <div className={styles.container}>
        {
          data&&data.map(product=><Card key={product.id} pathImg={product.fotos[0].src} nome={product.nome}/>)
        }
    </div>
  )
}
