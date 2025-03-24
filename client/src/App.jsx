import { Link, Outlet } from "react-router-dom"


function App() {

  return (
    <>
    <ul>
      <li>
        <Link to="/">Webbshop</Link>
      </li>
      <li>
        <Link to="/products/all">Se alla produkter</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  )
}

export default App
