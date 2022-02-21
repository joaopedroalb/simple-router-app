import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Product() {
  const {name} = useParams();
  console.log(name)

  return (
    <Layout>
      <h1>{name}</h1>
    </Layout>
  )
}
