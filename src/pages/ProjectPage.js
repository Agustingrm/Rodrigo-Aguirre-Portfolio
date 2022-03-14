import React, { useEffect } from "react";
import styled from "styled-components";
import PortfolioContext from "../context/PortfolioContext";
import { useContext } from "react";
import { useParams } from "react-router";

const SectionStyles = styled.section`
  display: grid;
  grid-template-columns: 400px 1fr;
  max-width: 1050px;
  gap: 1rem;
  margin: auto;
  padding: 1rem;
  img {
    grid-column: 1/2;
    max-width: 100%;
  }
  div {
    img {
      padding-bottom: 1rem;
    }
  }
  h2 {
    margin-top: 0;
  }
  h3 {
    font-size: 1rem;
    color: var(--darkGray);
  }
  @media all and (max-width: 959px) {
    grid-template-columns: 1fr;
  }
`;

const MessageStyles = styled.p`
  padding: 2rem;
  font-size: 1.5rem;
`;

function ProjectPage() {
  let projectSlug = useParams();
  const context = useContext(PortfolioContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (context.loading) {
    return <p>Loading...</p>;
  } else if (!context.loading) {
    let projectFind = context.projects.general.find(
      (individualProject) => projectSlug.project === individualProject.slug.current
    );
    if (projectFind) {
      return (
        <SectionStyles>
          <div>
            {projectFind.projectImages.map((image) => (
              <img src={image.asset.url} alt="Project" key={image.asset.url} />
            ))}
          </div>
          <div>
            <h2>{projectFind.name}</h2>
            <h3>Location: {projectFind.location}</h3>
            {projectFind.projectDescription.map((description, i) => (
              <p key={i}>{description}</p>
            ))}
          </div>
        </SectionStyles>
      );
    } else {
      return <MessageStyles>Sorry! This project doesn't exists!</MessageStyles>;
    }
  }
}

export default ProjectPage;
