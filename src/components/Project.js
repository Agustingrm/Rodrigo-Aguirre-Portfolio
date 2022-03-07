import styled from "styled-components";
import example from "../assets/example.jpg";

const CardStyles = styled.div`
  border: 1px gray solid;
  transition: 0.3s;
  &:hover {
    border: 1px var(--black) solid;
  }
  h3,
  p {
    margin: 0.5rem;
  }
  p {
    font-size: 0.8rem;
    color: var(--darkGray);
  }
  img {
    width: 100%;
  }
`;

function Project() {
  return (
    <CardStyles>
      <img src={example} alt="Proyect" />
      <h3>Example Title</h3>
      <p>Location: San Miguel de Tucumán, Argentina</p>
    </CardStyles>
  );
}

export default Project;
