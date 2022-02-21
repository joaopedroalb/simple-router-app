import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Layout from '../components/Layout'
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
    <Layout>
      <div className={styles.cardContainer}>
        {
          data&&data.map(product=><Link key={product.id} to={`/produto/${product.nome}`} style={{ textDecoration: 'none',color:'#000' }}>
                                    <Card pathImg={product.fotos[0].src} nome={product.nome}/>
                                  </Link>)
        }
      </div>
    </Layout>
  )
}
