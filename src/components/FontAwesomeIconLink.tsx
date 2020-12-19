import styled from "styled-components";

export const FontAwesomeIconLink = styled.a<{ iconUnicode: string }>`
  &:before {
    font-family: "Font Awesome 5 Brands";
    content: "${(props) => props.iconUnicode}";
    margin-right: 0.3rem;
    display: inline-block;
    text-decoration: none;
  }
`;
