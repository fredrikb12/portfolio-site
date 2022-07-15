import {
  StyledAboutButton,
  StyledProjectsButton,
} from "../styled-components/Button.styled";
import { StyledProjectCard } from "../styled-components/ProjectCard.styled";

function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <img
        style={{
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          border: "1px solid black",
          boxShadow: "0 0 6px 2px rgba(0,0,0,0.4)",
        }}
        src={project.img}
        alt={project.title}
      />
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "25px 0px",
            gap: "20px",
          }}
        >
          <a href={project.repoLink}>
            <StyledAboutButton>Repo</StyledAboutButton>
          </a>
          <a href={project.liveLink}>
            <StyledProjectsButton>Live</StyledProjectsButton>
          </a>
        </div>
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
