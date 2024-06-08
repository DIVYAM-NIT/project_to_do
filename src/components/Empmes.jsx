import React from 'react'
import styles from './Empmes.module.css'

export default function Empmes(props) {
  return (
    <>
    {props.ProductList.length===0 && <p className={styles.MessageOfEmpty}>Enter your Work.</p>}
    </>
  )
}
