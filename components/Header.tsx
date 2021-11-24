import Link from "next/link"
import styled from "styled-components"

type HeaderProps = {
  className?: string
}

const Header = ({ className }: HeaderProps) => (
  <nav className={className}>
    <h1>Company</h1>
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
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;

  h1 {
    margin: 0px;
    padding: 1rem 0.5rem;
    font-weight: 200;
  }

  ul {
    margin: 0px;
    list-style: none;
    display: flex;
    justify-content: flex-end;

    li {
      padding: 1rem;
    }
  }

  border-bottom: 1px solid #72757e;
`
