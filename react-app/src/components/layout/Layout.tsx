import Navbar from "../navbar/Navbar";

export default function Layout({children}) {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <article>{children}</article>
    </main>
  )
}