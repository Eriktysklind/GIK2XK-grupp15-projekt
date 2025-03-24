import { Link, Outlet } from "react-router-dom"

function App() {


  return (
    <>
     <ul>
      <li>
        <Link to="/">Webbshop</Link>
      </li>
      <li>
        <Link to="/products/new">Lägg till produkt</Link>
        </li>
        </ul>
        <Outlet />
    </>
  )
}

export default App
