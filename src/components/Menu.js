import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyles = styled.header`
  h1 {
    font-size: 1rem;
    text-align: center;
    background-color: var(--black);
    color: white;
    margin: 0;
    padding: 0.5rem 0;
    font-weight: normal;
    letter-spacing: 0.05rem;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0 auto;
    height: 3rem;
    padding: 0;
  }
  li {
    text-align: center;
    width: 100%;
  }
  li:not(:last-child) {
    border-right: 1px solid gray;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--black);
    width: 100%;
    height: 100%;
  }
  a:hover {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
  hr {
    margin-top: 0;
  }
`;

function Menu() {
  return (
    <HeaderStyles>
      <h1>RODRIGO &nbsp;AGUIRRE</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <hr />
    </HeaderStyles>
  );
}

export default Menu;
