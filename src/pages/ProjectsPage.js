import { Link } from "react-router-dom";
import styled from "styled-components";
import Project from "../components/Project";
import PortfolioContext from "../context/PortfolioContext";
import { useContext } from "react";

const SectionStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  max-width: 1100px;
  padding: 1rem;
  gap: 1rem;
  margin: auto;
  @media all and (max-width: 340px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0.5rem;
  }
`;

function ProjectsPage() {
  const context = useContext(PortfolioContext);
  if (context.loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <SectionStyles>
        {context.projects.general.map((project) => {
          return (
            <Link to={`/projects/${project.slug.current}`} key={project.slug.current}>
              <Project project={project} />
            </Link>
          );
        })}
      </SectionStyles>
    );
  }
}

export default ProjectsPage;
