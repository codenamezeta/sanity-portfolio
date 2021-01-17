import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar(props) {
  // if (props.transparent) {
  //   const transparentStyle = "bg-gray-900 transparent"
  // }
  return (
    <header className='bg-gray-900 opacity-75 fixed top-0 z-10'>
      <nav className='container flex mx-auto justify-between text-gray-400 flex-wrap'>
        <NavLink
          to='/'
          exact
          activeClassName='text-white'
          className='inline-flex items-center py-6 px-3 mr-4 text-pink-400 hover:text-white text-4xl font-bold cursive tracking-widest'
        >
          Michael Zeta
        </NavLink>
        <NavLink
          to='/'
          exact
          className='inline-flex items-center py-3 px-3 rounded cursive tracking-widest hover:text-white'
          activeClassName='text-white'
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          activeClassName='text-white'
          className='inline-flex items-center py-3 px-3 rounded cursive tracking-widest hover:text-white'
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          activeClassName='text-white'
          className='inline-flex items-center py-3 px-3 rounded cursive tracking-widest hover:text-white'
        >
          Portfolio
        </NavLink>
        <NavLink
          to='/posts'
          activeClassName='text-white'
          className='inline-flex items-center py-3 px-3 mr-auto rounded cursive tracking-widest hover:text-white'
        >
          Posts
        </NavLink>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://www.facebook.com/MichaelZeta11'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.youtube.com/channel/UCJ4snty717O4Jo4OnayqPhQ?view_as=subscriber'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.linkedin.com/in/codenamezeta/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://twitter.com/the2ndmsngr'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </nav>
    </header>
  )
}
