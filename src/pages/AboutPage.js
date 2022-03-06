import styled from "styled-components";
import portrait from "../assets/portrait.jpg";

const SectionStyles = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  column-gap: 2rem;
  img {
    width: 100%;
  }
  p {
    margin-top: 0;
  }
`;

function AboutPage() {
  return (
    <SectionStyles>
      <img src={portrait} alt="Portrait of Rodrigo Aguirre" />
      <div>
        <p>
          Fusce lacus dui, feugiat quis scelerisque quis, ornare nec turpis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Morbi ut molestie eros, ut euismod nunc. Praesent aliquet erat non
          augue iaculis, ut finibus odio aliquet. Proin viverra eleifend commodo. Morbi viverra nisl ante,
          volutpat sodales tortor sollicitudin vel.{" "}
        </p>
        <p>
          Pellentesque rhoncus lobortis gravida. Fusce eleifend venenatis nibh sed tristique. Integer
          fermentum non lectus sit amet varius. Maecenas congue eros lacus, ac molestie lectus efficitur
          vitae. Nulla dictum luctus felis vel dapibus. Proin et aliquam dui. Proin at urna non est finibus
          gravida eget nec dolor. Maecenas condimentum ligula nec nulla elementum, non maximus lorem egestas.
          Curabitur accumsan dolor id egestas auctor.{" "}
        </p>
        <p>
          Cras eleifend eleifend justo, eu gravida erat venenatis at. Sed consectetur, mi eu mollis sodales,
          erat odio tristique lacus, eget scelerisque tellus augue vel odio. Sed ipsum ante, sagittis vitae
          odio a, pulvinar lobortis quam. Aenean aliquet nunc a lacus mattis, id placerat est elementum. Donec
          est sapien, tincidunt quis ante id, sollicitudin ullamcorper enim. Donec non elit purus. Ut mollis
          fermentum rutrum.{" "}
        </p>
        <p>
          Duis rhoncus in nisi vitae volutpat. Phasellus quis est nisl. Sed pretium, purus ac dapibus
          porttitor, nisi ligula feugiat leo, nec volutpat libero leo at nibh. Integer sit amet metus
          hendrerit, ornare nisi tincidunt, bibendum orci. Pellentesque ligula urna, rutrum sed volutpat
          vitae, sollicitudin aliquam lacus. Aliquam commodo dolor id lacinia interdum. Donec id nulla ut
          magna suscipit suscipit. Nam lacinia laoreet erat, id egestas nunc accumsan lobortis. Praesent ut
          nulla ac diam tincidunt rhoncus. Cras cursus quis metus in tincidunt.
        </p>
      </div>
    </SectionStyles>
  );
}

export default AboutPage;
