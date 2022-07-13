import { StyledNavItem } from "../styled-components/NavItem.styled";

function NavItem({ name, src }) {
  return (
    <StyledNavItem>
      <a href={`#${name.toLowerCase()}`}>
        <img src={src} alt={name} />
        {name}
      </a>
    </StyledNavItem>
  );
}

export default NavItem;
