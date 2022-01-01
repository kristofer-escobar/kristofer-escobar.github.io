import React, { useState } from 'react'
import * as styles from './counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <section className={styles.section}>
      <h3 className={styles.h3}>Counter example</h3>
      <p>
        Current count: <span>{count}</span>
      </p>
      <button className={styles.button} onClick={increment}>
        +
      </button>
      <button className={styles.button} onClick={decrement}>
        -
      </button>
    </section>
  )
}

export default Counter
