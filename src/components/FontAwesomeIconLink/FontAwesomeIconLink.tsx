import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/brands.css";

export const FontAwesomeIconLink = styled.a<{ iconUnicode: string }>`
  color: #a00;

  &:hover,
  &:visited {
    color: #c00;
  }

  &:before {
    font-family: "Font Awesome 5 Brands";
    content: "${(props) => props.iconUnicode}";
    margin-right: 0.3rem;
    display: inline-block;
    text-decoration: none;
  }
`;
