import { Link } from '@inertiajs/react'

function Navbar() {

  return (
    <div className="flex flex-row justify-center">
      <Link className='mx-4' href="/">Home</Link>
      <Link className='mx-4' href="/about">About</Link>
      <Link className='mx-4' href="/blog">Blog</Link>
    </div>
  )
}

export default Navbar