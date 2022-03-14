import styled from "styled-components";

const SectionStyles = styled.section`
  text-align: center;
  padding-top: 3rem;
  p {
    max-width: 700px;
    margin: auto;
    text-align: center;
  }
  @media all and (max-width: 959px) {
    padding-top: 7rem;
    h2 {
      font-size: 2rem;
      padding: 0 0.5rem;
    }
    p {
      padding: 0 0.5rem;
    }
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
