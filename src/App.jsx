import { useState } from 'react'
import './App.css'



// const welcome = {
//   greeting: 'Hey',
//   title: 'React',
// }
const getTitle = (title) => {
  return title
}

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        {/* <h1> {welcome.greeting} {welcome.title}</h1> */}
        <h1> {getTitle('Hey 💛')}</h1>

      </div>
      <label htmlFor="search">Search: </label>
      <input type="text" />

      {/* <button onClick={() => setCount(count + 1)}>Click me</button>
      count is {count} */}
    </>
  )
}

export default App
