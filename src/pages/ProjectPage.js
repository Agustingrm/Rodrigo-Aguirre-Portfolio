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
  let project = useParams();
  console.log(project);
  const context = useContext(PortfolioContext);
  if (context.loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <SectionStyles>
        {/* <div>{console.log(context.projects.general)}</div> */}
        <div>
          <h2>Example Title</h2>
          <h3>Location: San Miguel de Tucuman</h3>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur rutrum
            tellus in molestie. Morbi vulputate ultricies odio, sed luctus augue efficitur sit amet. Aliquam
            non dictum risus. Vestibulum faucibus, magna id vulputate pulvinar, neque nisl viverra est, id
            consectetur nisi dui a enim. Maecenas maximus congue sodales. In sit amet arcu ex. Suspendisse
            luctus odio quis pellentesque maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi dictum nulla eros, eu laoreet quam vulputate sit amet. Nam sagittis purus et vehicula
            efficitur. Vivamus blandit est vitae convallis varius. Duis vel placerat ante. Morbi ultricies
            orci sit amet sem hendrerit dictum. Sed vitae nunc sollicitudin, tempus libero vitae, aliquam
            libero. Phasellus placerat justo et odio vehicula suscipit. Sed vulputate lacinia lacus, vel
            venenatis ante maximus volutpat. In hac habitasse platea dictumst. Nam et dui sit amet purus
            fermentum imperdiet. Fusce tincidunt nibh at lorem rutrum, ac congue felis pellentesque. Quisque
            vitae tincidunt arcu, non iaculis sapien. Integer varius, sem sit amet feugiat vestibulum, elit
            urna suscipit ex, a tempus velit nisl in est. Nulla scelerisque, elit viverra venenatis accumsan,
            ante est semper magna, ut imperdiet eros nibh sit amet turpis. In ipsum eros, posuere eget enim
            at, consectetur tincidunt turpis. Curabitur pulvinar placerat volutpat. Praesent nec nisi nec
            risus maximus commodo. Duis pharetra non libero ac convallis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum malesuada vehicula ante, sit
            amet tincidunt ligula efficitur tincidunt. Sed sagittis porta neque, a pellentesque erat
            sollicitudin vitae. Proin accumsan pellentesque aliquam. Etiam ut erat eros. Integer quis mauris
            non eros lacinia porta vitae a nibh. Duis tincidunt diam a tellus eleifend, vitae tincidunt sapien
            eleifend. Ut et lorem at leo egestas egestas. Sed sagittis tincidunt libero, eget posuere est. Sed
            faucibus dolor vitae magna pharetra egestas. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam in felis euismod, imperdiet dui placerat, hendrerit odio. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sed dolor placerat, varius
            orci id, auctor libero.
          </p>
        </div>
      </SectionStyles>
    );
  }
}

export default ProjectPage;
