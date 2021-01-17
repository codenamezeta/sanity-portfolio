import React, { useState } from 'react'
import './Nav.css'
import { SocialIcon } from 'react-social-icons'
// import { Icon } from 'semantic-ui-react'
//TODO: Auto focus when nav state is toggled.
//? Maybe try: document.getElementById("nav_open_item").focus()

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)
  let sideSheetClasses = 'closed',
    clickBlockerClass = 'off',
    docBody = document.body
  docBody.style.overflow = 'visible'
  if (navOpen) {
    sideSheetClasses = 'open'
    clickBlockerClass = 'on'
    docBody.style.overflow = 'hidden'
  }

  return (
    <>
      <nav id='navbar'>
        <ul>
          <li id='navbar_brand'>
            <a href='/'>Michael Zeta</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/about'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/projects'>
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/posts'>
              Posts
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Contact
            </a>
          </li>
          <li id='nav_open_item' onClick={() => setNavOpen(true)}>
            {/* <Icon name='bars' size='big' /> */}
            <span className='material-icons'>menu</span>
          </li>
        </ul>
      </nav>
      {/* Click blocker expands when Side Sheet is open to prevent accidental clicks on the document body */}
      <div
        id='click_blocker'
        className={clickBlockerClass}
        onClick={() => setNavOpen(false)}
      ></div>
      {/* <!-- Mobile Navigation --> */}
      <nav id='side_sheet' className={sideSheetClasses}>
        <ul>
          <li
            id='nav_close_item'
            className='nav-item'
            onClick={() => setNavOpen(false)}
          >
            {/* <Icon name='close' size='big' /> */}
            <span id='nav_close_item' className='material-icons'>
              close
            </span>
          </li>
          <li className='nav-item'>
            <a id='side_nav_brand' className='' href='/'>
              Michael Zeta
            </a>
          </li>
          <li className='nav-item'>
            <a href='/' className='side-nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='/about' className='side-nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='/projects' className='side-nav-link'>
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a href='/posts' className='side-nav-link'>
              Posts
            </a>
          </li>
          <li className='nav-item'>
            <a href='/contact' className='side-nav-link'>
              Contact
            </a>
          </li>
          <li className='nav-item'>
            <SocialIcon
              url='https://www.facebook.com/MichaelZeta11'
              className='ml-auto mr-2'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://www.youtube.com/channel/UCJ4snty717O4Jo4OnayqPhQ?view_as=subscriber'
              className='mx-2'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://www.linkedin.com/in/codenamezeta/'
              className='mx-2'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://twitter.com/the2ndmsngr'
              className='ml-2 mr-auto'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
