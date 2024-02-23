import { useEffect, useState } from "react"
import TotalItem from "./TotalItem/TotalItem"

// style untuk Counter
import "./style.css"
import CounterAction from "./CounterAction/CounterAction"

// component react
const Counter = () => {
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(0)
  const [isShowTotal, setShowTotal] = useState(false)

  useEffect(() => {
    setPrice(12000)
  }, []) // tanpa dependency di trigger pertama kali refresh

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        // muncul totalnya
        setShowTotal(true)
      }, 2000);
    } else {
      setShowTotal(false)
    }
  }, [count])
  

  const minusCounter = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  
  const plusCounter = () => {
    // cara lebih baik
    setCount((prevValue) => prevValue + 1)
  }

  return (
    <main>

      <div className="price-wrapper">
        Harga Barang :
        <span>Rp{price}</span>
      </div>

      {
        // contoh output
      }
      <CounterAction
        text="Jumlah Barang"
        count={count}
        onMinusCounter={() => {
          // ini ke trigger pas anaknya klik button minus
          minusCounter()
        }}
        onPlusCounter={(param1, param2) => {
          console.log(param1, param2)
          plusCounter()
        }}
      />

      {
        // contoh input
      }
      {
        isShowTotal ? (
          <TotalItem total={{
            price,
            count
          }} />
        ) : <div className="loading">Loading...</div>
      }
      
    </main>
  )
}

export default Counter