import Link from "next/link"
import styled from "styled-components"

type HeaderProps = {
  className?: string
}

const Header = ({ className }: HeaderProps) => (
  <nav className={className}>
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

export default styled(Header)/*css */ `
  width: 100vw;

  ul {
    margin: 0px;
    list-style: none;
    display: flex;
    justify-content: flex-end;

    li {
      padding: 1rem;
    }
  }

  a {
    text-transform: uppercase;
  }
`
