
import './App.css'
import DarkModeToggle from './DarkModeToggle'



function App() {
 

  return (
    <div className= 'p-4 bg-white dark:bg-gray-800 min-h-screen'>
      <DarkModeToggle />
      
      <h1 className='text-2xl text-gray-900 dark:text-white'>Welcome to Dark Mode App</h1>
      <p className='text-gray-500 dark:text-gray-400 '>This is the example for dark mode</p>
    </div>
  )
}

export default App
