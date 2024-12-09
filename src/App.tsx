import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from './helpers/classNames/classNames'
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync'
import { MainPageAsync } from './pages/MainPage/MainPageAsync'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

const App = () => {
	const {theme, toggleTheme} = useTheme()
	return ( 

		
		<div className={classNames('app',{},[theme])}>
			<button onClick={toggleTheme}>toggle theme</button>
			<Link to={'/'}>main</Link>
			<Link to={'/about'}>about</Link>
			<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path='/about' element={<AboutPageAsync />} />	
				<Route path='/' element={<MainPageAsync />} />
			</Routes>
			</Suspense>
		</div>
	 );
}
 
export default App;