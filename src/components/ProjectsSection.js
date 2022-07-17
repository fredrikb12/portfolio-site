import { StyledProjectsSection } from "../styled-components/ProjectsSection.styled";
import odinbookImg2 from "../images/odinbook-zoomed-screenshot.png";
import twitterImg from "../images/twitter-zoomed-screenshot.png";
import battleshipImg from "../images/battleship-zoomed-screenshot.png";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  const projects = [
    {
      title: "Odinbook",
      description:
        "A Facebook-like web application built to show off the entirety of my skillset working with the MERN stack.",
      img: odinbookImg2,
      repoLink: "https://github.com/fredrikb12/odinbook-client/",
      liveLink: "https://odinbook.xyz",
    },
    {
      title: "Twitter Clone",
      description:
        "A Twitter clone built with React and Firebase to recreate a portion of a popular application to the best of my ability at the time, before moving forward toward learning about back-end code.",
      img: twitterImg,
      repoLink: "https://github.com/fredrikb12/twitter-clone",
      liveLink: "https://fredrikb12.github.io/twitter-clone/",
    },
    {
      title: "Battleship",
      description:
        "A Battleship clone written with a TDD philosophy, making sure that code is written in a maintainable, testable fashion. Developed with Jest and JS.",
      img: battleshipImg,
      repoLink: "https://github.com/fredrikb12/battleship",
      liveLink: "https://fredrikb12.github.io/battleship/",
    },
    // { title: "", description: "", img: {}, repoLink: "", liveLink: "" },
  ];
  return (
    <StyledProjectsSection id="projects">
      {projects.map((project, id) => {
        return <ProjectCard key={id} project={project} />;
      })}
    </StyledProjectsSection>
  );
}

export default ProjectsSection;
