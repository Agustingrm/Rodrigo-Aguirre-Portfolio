import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import menuLine from "../assets/menuLine.svg";
import { motion } from "framer-motion";
import MenuLinesStyles from "../styles/menuLines";

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
    position: relative;
    z-index: 3;
  }
  .title {
    display: block;
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
    color: black;
    border: 1px inset black;
  }
  hr {
    margin-top: 0;
  }
  @media all and (max-width: 959px) {
    h1 {
      height: 2.5rem;
    }
    hr {
      display: none;
    }
    ul {
      position: absolute;
      top: -168px;
      width: 100%;
      flex-direction: column;
      li {
        padding: 10px 0;
        background-color: white;
        z-index: 2;
        border-bottom: solid 1px gray;
      }
    }
  }
`;

function Menu() {
  const [menu, setMenu] = useState(true);
  const [rotationTop, setRotationTop] = useState({});
  const [rotationMiddle, setRotationMiddle] = useState({});
  const [rotationBottom, setRotationBottom] = useState({});
  const [menuMovement, setMenuMovement] = useState({});

  const resetAnimations = () => {
    setRotationTop({});
    setRotationBottom({});
    setRotationMiddle({});
    setMenuMovement({});
    setTimeout(() => setMenu(false), 300);
  };

  const handleMenuClick = () => {
    if (menu) {
      resetAnimations();
    } else {
      setRotationTop({ rotate: 45, x: 0, y: 11 });
      setRotationBottom({ rotate: 45, x: 0, y: -11 });
      setRotationMiddle({ rotate: -45 });
      setMenuMovement({ y: 208 });
      setMenu(true);
    }
  };

  return (
    <HeaderStyles>
      <Link className="title" to="/" onClick={resetAnimations}>
        <h1>RODRIGO &nbsp;AGUIRRE</h1>
      </Link>
      <MenuLinesStyles onClick={handleMenuClick}>
        <motion.img
          src={menuLine}
          alt=""
          className="topLine"
          animate={rotationTop}
          transition={{ type: "tween" }}
        />
        <motion.img
          src={menuLine}
          alt=""
          className="middleLine"
          animate={rotationMiddle}
          transition={{ type: "tween" }}
        />
        <motion.img
          src={menuLine}
          alt=""
          className="bottomLine"
          animate={rotationBottom}
          transition={{ type: "tween" }}
        />
      </MenuLinesStyles>
      <motion.ul animate={menu ? menuMovement : ""} transition={{ type: "tween", duration: 0.3 }}>
        <li>
          <Link to="/" onClick={resetAnimations}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={resetAnimations}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={resetAnimations}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={resetAnimations}>
            Contact
          </Link>
        </li>
      </motion.ul>
      <hr />
    </HeaderStyles>
  );
}

export default Menu;
