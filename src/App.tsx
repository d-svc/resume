import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import './App.scss'
import React, { useEffect, useState } from 'react'
import { Contact } from './Contact/Contact'

function App (): JSX.Element {
  const location = useLocation()
  const [hash, setHash] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (hash != null) {
      const hashTrim = hash.slice(1)
      const element = document.getElementById(hashTrim)
      if (element != null) {
        element.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }, [hash])

  useEffect(() => {
    setHash(location.hash)
  }, [location])

  return <>
    <div className='my-awesome-portfolio'>
      <div className="lines">
        <hr />
        <hr />
        <hr />
      </div>
      <header>
        <div className="logo-menu">
          <NavLink to='/' className='logo-link'>
            <div className="logo h5-text">
              <div className="logo-circle"></div>
              DH
            </div>
          </NavLink>
          <ul className="menu">
            <li className='menu-link'><NavLink to={'/#portfolio'}>Portfolio</NavLink></li>
            <li><NavLink to={'/#about'}>Experience</NavLink></li>
            <li><NavLink to={'/#contact'}>Contact me</NavLink></li>
          </ul>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <div className="container" id='contact'>
        <Contact />
      </div>
    </div>

  </>
}

export default App
