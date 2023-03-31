import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='contents'>
            <div className='logo'>helo</div>
            <ul className='sections'>
                <Link className='section-list'>About</Link>
                <Link className='section-list'>Skills</Link>
                <Link className='section-list'>Projects</Link>
                <Link className='section-list'>Blogs</Link>
                <Link className='section-list'>Contact</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar