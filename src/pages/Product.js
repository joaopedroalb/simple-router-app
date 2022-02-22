import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import styles from '../styles/Product.module.css'

export default function Product() {
  const {name} = useParams();
  const [product,setProduct] = useState(null)

  useEffect(()=>{
    const fetchData = async() =>{
      const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${name}`)
      const data = await res.json();
      console.log(data)

      setProduct(data)
    }

    if(name){
      fetchData()
    }
  },[name])

  return (
    <>
      {
        product?(
          <div className={styles.container}>
            <img alt={product.nome} src={product.fotos[0].src}/>
            <div className={styles.infoContainer}>
              <h1>{product.nome}</h1>
              <label className={styles.valueBox}>R$ {product.preco}</label>
              <div className={styles.descriptionContainer}>
                <p>{product.descricao}</p>
              </div>
            </div>
          </div>
        ):<Loading/>
      }
    </>
  )
}
