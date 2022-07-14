import { StyledAboutSection } from "../styled-components/AboutSection.styled";
import {
  BlueImportantSpan,
  PaleRedImportantSpan,
  RedImportantSpan,
} from "../styled-components/Span.styled";
import illustration from "../images/undraw_illustration.svg";

function AboutSection() {
  return (
    <StyledAboutSection id="about">
      <div>
        <h2>About me</h2>
        <p style={{ color: "#f4fffd" }}>
          I've found not only a{" "}
          <PaleRedImportantSpan>purpose</PaleRedImportantSpan> but a{" "}
          <RedImportantSpan>passion</RedImportantSpan> in
          <BlueImportantSpan> programming</BlueImportantSpan> and specifically
          <BlueImportantSpan> web development,</BlueImportantSpan> and am
          currently expanding my knowledge within the React and Express
          ecosystems. With solid foundations built upon the{" "}
          <a
            style={{ color: "inherit" }}
            href="https://www.theodinproject.com/"
          >
            The Odin Project's
          </a>{" "}
          curriculum, I look hopefully toward a future building increasingly
          unique projects, this time on a team!
        </p>
      </div>
      <img
        style={{ width: "400px" }}
        src={illustration}
        alt="react illustration"
      />
    </StyledAboutSection>
  );
}

export default AboutSection;
