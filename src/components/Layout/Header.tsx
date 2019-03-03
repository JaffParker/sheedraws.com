import React from 'react'
import { Logo } from './Logo'
import { Navbar } from '../Navbar/Navbar'
import { NavLink } from '../Navbar/NavLink'

export const Header = () => (
  <section>
    <div className="mx-auto max-w-xs">
      <Logo />
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </Navbar>
    </div>
  </section>
)
