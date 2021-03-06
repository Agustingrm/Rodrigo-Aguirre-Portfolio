import styled from "styled-components";

const MenuLinesStyles = styled.div`
  display: none;
  @media all and (max-width: 959px) {
    display: block;
    position: absolute;
    right: 10px;
    height: 24px;
    width: 30px;
    top: 8px;
    z-index: 20;
    cursor: pointer;
    .topLine,
    .middleLine,
    .bottomLine {
      z-index: 15;
      position: absolute;
      width: 30px;
    }
    .topLine {
      top: 0px;
    }
    .middleLine {
      top: 11px;
    }
    .bottomLine {
      top: 22px;
    }
  }
`;

export default MenuLinesStyles;
