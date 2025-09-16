import React from 'react'
import Link from 'next/link'
import NavActions from './nav-actions'
import { MessageSquareTextIcon } from 'lucide-react';
import { Button } from '../ui/button';

export default function HomeNavbar() {
  return (
    <div className='flex items-center justify-center lg:px-20 py-3 bg-background'>
      <div className="flex items-center justify-between w-full">
        <Link href="">
          <Button variant="ghost">
            <MessageSquareTextIcon />
            <p className='tracker-tighter font-bold'>chat.up</p>
          </Button>
        </Link>

        {/* <Navlinks /> */}

        <NavActions />
      </div>
    </div>
  )
}
