import styles from './App.module.css'
import { Introduction } from './components/introduction/Introduction'
import { Navbar } from './components/navbar/Navbar'
import { About } from './components/about/About'

function App() {
  return (
    <>
     <div className={styles.App}>
      <Navbar/>
      <Introduction/>
      <About/>
     </div>
    </>
  )
}

export default App
