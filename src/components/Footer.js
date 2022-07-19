import { StyledFooter } from "../styled-components/Footer.styled";
import emailImg from "../images/email.svg";

function Footer() {
  return (
    <StyledFooter>
      <a href="https://www.linkedin.com/in/fredrik-b%C3%A4ckman-813a8a205/">
        <img
          style={{ width: "60px" }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt="linkedin"
        />
      </a>
      <a href="https://github.com/fredrikb12">
        <img
          style={{ width: "60px" }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="github"
        />
      </a>
      <a href="mailto:fredrik.backman12@gmail.com">
        <img style={{ width: "60px" }} src={emailImg} alt="email" />
      </a>
    </StyledFooter>
  );
}

export default Footer;
