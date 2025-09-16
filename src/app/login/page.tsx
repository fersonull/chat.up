import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div className='flex items-center justify-center h-[100dvh]'>
      <form className='min-w-xs'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" >Email</Label>
            <Input type="email" name="email" id="email" placeholder='sam@ple.com' />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" />
          </div>

          <Button>Login</Button>
        </div>
      </form>
    </div>
  )
}
