import { useState, useEffect } from 'react'
import './product.css'
import { db } from "../config/firebase"
import { getDocs, collection, addDoc } from "firebase/firestore"

import React from 'react'
import ReactDOM from 'react-dom/client'
import './product.css'

function Product() {
  const [count, setCount] = useState(0)
  return(
    <>
        <p>
            Product Page
        </p>
    </>
  )
}

export default Product

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Product />
    </React.StrictMode>,
)