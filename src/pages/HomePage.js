import styled from "styled-components";

const SectionStyles = styled.section`
  text-align: center;
  padding-top: 3rem;
  p {
    max-width: 600px;
    margin: auto;
    text-align: center;
  }
`;

function HomePage() {
  return (
    <SectionStyles>
      <h2>Ing. Rodrigo Aguirre</h2>
      <p>
        Proyectista dedicado al desarrollo, diseño, gerenciamiento y supervisión de proyectos industriales.
        Especializado en diversas industrias: Azúcar, Alcohol, Biocombustibles, Energía y Alimentos.
      </p>
    </SectionStyles>
  );
}

export default HomePage;
