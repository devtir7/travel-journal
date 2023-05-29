import './index.css'
import Navbar from './Navbar'
import Entry from './Entry'
import data from "./data"

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