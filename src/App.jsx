import styles from './App.module.css'
import { Introduction } from './components/introduction/Introduction'
import { Navbar } from './components/navbar/Navbar'
import { About } from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Projects } from './components/projects/Project'
import {Contact} from './components/contact/Contact'

function App() {
  return (
    <>
     <div className={styles.App}>
      <Navbar/>
      {/* <div className='amit'>jhkjhkj</div> */}
      <Introduction/>
      {/* <About/> */}
      {/* <Experience/> */}
      {/* <Projects/> */}
      {/* <Contact/> */}
     </div>
    </>
  )
}

export default App
