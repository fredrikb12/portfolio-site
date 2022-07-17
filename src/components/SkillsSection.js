import { StyledSkillsSection } from "../styled-components/SkillsSection.styled";
import styled from "../images/languages-tools/styled-components.svg";

function SkillsSection() {
  return (
    <StyledSkillsSection id="skills">
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="node"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="react"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="express"
        />
      </div>

      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="javascript"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          alt="mongodb"
        />
        <img src={styled} alt="styled-components" />
      </div>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
          alt="webpack"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="git"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          alt="jest"
        />
      </div>
    </StyledSkillsSection>
  );
}

export default SkillsSection;
