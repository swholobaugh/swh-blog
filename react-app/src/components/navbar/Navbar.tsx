import { Link, usePage } from '@inertiajs/react'


function Navbar() {
  const {component} = usePage()

  return (
    <div className="flex flex-row justify-center">
      <Link
        className={`mx-4 ${component === 'Home/Index' ? 'font-bold border-bottom border-b-2' : 'font-normal'}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`mx-4 ${component === 'About/Index' ? 'font-bold border-bottom border-b-2' : 'font-normal'}`}
        href="/about"
      >
        About
      </Link>
      <Link
        className={`mx-4 ${component === 'Blog/Index' ? 'font-bold border-bottom border-b-2' : 'font-normal'}`}
        href="/blog"
      >
        Blog
      </Link>
    </div>
  )
}

export default Navbar