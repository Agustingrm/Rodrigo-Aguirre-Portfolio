import React from "react";
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
`;

function ProjectPage() {
  let projectSlug = useParams();
  const context = useContext(PortfolioContext);

  if (context.loading) {
    return <p>Loading...</p>;
  } else if (!context.loading) {
    for (let individualProject of context.projects.general) {
      if (projectSlug.project === individualProject.slug.current) {
        return (
          <SectionStyles>
            <div>
              {individualProject.projectImages.map((image) => (
                <img src={image.asset.url} alt="Project" />
              ))}
            </div>
            <div>
              <h2>{individualProject.name}</h2>
              <h3>Location: {individualProject.location}</h3>
              {individualProject.projectDescription.map((description) => (
                <p>{description}</p>
              ))}
            </div>
          </SectionStyles>
        );
      } else {
        return <p>Sorry! This project doesn't exists!</p>;
      }
    }
  }
}

export default ProjectPage;
