import { useState } from 'react'
import * as styles from './Counter.module.scss'
console.log(styles);

export const Counter = () => {
	const [ count, setCount ] = useState(0)
	const increment = () => setCount(prev => prev + 1)
	return (
		<div>
			<h1>Counter{count}</h1>
			<button className={styles.btn} onClick={increment}>increment</button>
		</div>
	)
}