import Link from 'next/link'
import { Button } from '../ui/button'

const navLinks: Array<{ label: string, href: string }> = [
    { label: 'Home', href: '' },
    { label: 'About', href: '/about' },
]

export default function Navlinks() {
  return (
    <div className='flex items-center justify-center'>
      {navLinks.map(({ label, href }) => (
        <Button key={label} variant="link">
            <Link href={href}>{label}</Link>
        </Button>
      ))}
    </div>
  )
}
