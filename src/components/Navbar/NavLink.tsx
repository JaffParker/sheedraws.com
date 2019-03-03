import React, { SFC } from 'react'
import { Link } from 'gatsby'

interface NavLinkProps {
  to: string
}

export const NavLink: SFC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="text-black no-underline font-serif text-lg hover:text-red-light mx-4"
  >
    {children}
  </Link>
)
