import styled from "styled-components";
import PortfolioContext from "../context/PortfolioContext";
import { useContext } from "react";

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

function Project({ project }, props) {
  const context = useContext(PortfolioContext);
  if (context.loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <CardStyles>
        <img src={project.coverImage.asset.url} alt="Proyect" />
        <h3>{project.name}</h3>
        <p>Location: {project.location}</p>
      </CardStyles>
    );
  }
}

export default Project;
