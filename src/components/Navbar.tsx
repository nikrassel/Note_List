import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper green darken-2 px1">
        <a href="/" className="brand-logo">Листок-памятка</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/">Список дел</NavLink></li>
            <li><NavLink to="/about">Информация</NavLink></li>
        </ul>
        </div>
    </nav>
)