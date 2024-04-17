import React, { useState } from 'react'
import './index.css'

export default function Cart() {
    const [count,setCount] = useState(0);
    function Increment(){
        setCount((count)=>count+1)
    }
  return (
    <>
        Number of items : {count}
        <button onClick={Increment}>Add to cart</button>
    </>
  )
}
