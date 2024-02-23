import React from 'react'

const CounterAction = ({
    text, // input
    count,
    onMinusCounter, // output
    onPlusCounter
}) => {
  return (
    <div className="counter-wrapper">
        {text} :
        <button onClick={onMinusCounter}>
            -
        </button>
        <span>{count}</span>
        <button onClick={() => {
            onPlusCounter("blablabla", "blibli")
        }}>
            +
        </button>
    </div>
  )
}

export default CounterAction