import React from 'react'
import loadingImg from '../../images/loading.gif'

export default function Loading() {
  return (
    <img src={loadingImg} alt={Loading} style={{width: '120px'}}/>
  )
}
