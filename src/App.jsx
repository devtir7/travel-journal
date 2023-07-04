import './index.css'
import Navbar from './Navbar.js'
import Entry from './Entry.js'
import data from "./data.js"

export default function App() {
  const entries = data.map(item => {
    return (
        <Entry 
        key={item.id}
        {...item}
      />
    )
  })
  
  return (
    <>
      <Navbar/>
      <section className="entry-list">
        {entries}
      </section>
    </>
  )
}