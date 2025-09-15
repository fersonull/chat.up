import React from 'react'
import Navlinks from './navlinks'
import NavActions from './nav-actions'

export default function HomeNavbar() {
  return (
    <div className='flex items-center justify-center lg:px-20 py-3 bg-background'>
      <div className="flex items-center justify-between w-full">
        <a href="" className='font-bold tracking-tighter'>
          chat.up
        </a>

        {/* <Navlinks /> */}

        <NavActions />
      </div>
    </div>
  )
}
