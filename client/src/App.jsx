import { Link } from "react-router-dom"


function App() {

  return (
    <>
    <ul>
      <li>
        <Link href="/">Webbshop</Link>
      </li>
      <li>
        <Link href="/products/all">Se alla producter</Link>
        </li>
      </ul>
    </>
  )
}

export default App
