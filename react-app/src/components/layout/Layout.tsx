import Navbar from "../navbar/Navbar";

export default function Layout({children}) {
  return (
    <main>
      <header className='m-4'>
        <Navbar />
      </header>
      <article>{children}</article>
    </main>
  )
}