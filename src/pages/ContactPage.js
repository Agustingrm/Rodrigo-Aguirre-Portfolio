import styled from "styled-components";
import linkedinLogo from "../assets/linkedinIcon.svg";

const SectionStyles = styled.section`
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  h2 {
    font-weight: normal;
    margin: 0 0 2rem;
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  img {
    width: 20px;
  }
  .data {
    padding-left: 2rem;
  }
  .titles {
    font-weight: bold;
    &:last-child {
      position: absolute;
      bottom: 3rem;
    }
  }
  .socialNetwork {
    display: grid;
    width: 150px;
    grid-template-columns: 20px 120px;
    column-gap: 0.4rem;
    align-items: center;
    p {
      margin: 0;
    }
  }
`;

function ContactPage() {
  return (
    <SectionStyles>
      <h2>Contact Information</h2>
      <p className="titles">Email</p>
      <a href="mailto: introducirMail@gmail.com" className="data">
        introducirMail@gmail.com
      </a>
      <p className="titles">Cellphone</p>
      <p className="data">+54 381 6123654</p>
      <p className="titles">Social Networks</p>
      <a href="www.linkedin.com/tulinkedin" className="data socialNetwork">
        <img src={linkedinLogo} alt="logo" />
        <p>RodrigoAguirre</p>
      </a>
      <p className="titles">Tucumán - Argentina</p>
    </SectionStyles>
  );
}

export default ContactPage;
