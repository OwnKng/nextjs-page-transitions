import Link from "next/link"

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
