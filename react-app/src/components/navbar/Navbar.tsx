import { Link } from '@inertiajs/react'

function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </div>
  )
}

export default Navbar