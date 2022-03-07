import { Link } from "react-router-dom";
import styled from "styled-components";
import Project from "../components/Project";

let x = [0, 1, 2, 3];

const SectionStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  max-width: 1100px;
  padding: 1rem;
  gap: 1rem;
  margin: auto;
`;

function ProjectsPage() {
  return (
    <SectionStyles>
      {x.map((i) => {
        return (
          <Link to="/projects/project">
            <Project key={i} />
          </Link>
        );
      })}
    </SectionStyles>
  );
}

export default ProjectsPage;
