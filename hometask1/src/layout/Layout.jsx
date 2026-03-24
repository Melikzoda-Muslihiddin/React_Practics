import React from 'react'
import {Link,Outlet} from "react-router"

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to={"/about"}>About</Link>
        <Link to={"/"}>Home</Link>
      </nav>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
