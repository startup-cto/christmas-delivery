import {
  githubLinkText,
  projectDescription,
  twitchLinkText,
} from "../locale/en/main.json";
import React from "react";
import { FontAwesomeIconLink } from "../components/FontAwesomeIconLink/FontAwesomeIconLink";
import { InlineList } from "../components/InlineList/InlineList";
import styled from "styled-components";

const TextBlock = styled.p`
  margin: 1rem;
`;

export function ProjectDescription() {
  return (
    <aside>
      <p>{projectDescription}</p>
      <InlineList>
        <FontAwesomeIconLink
          href="https://github.com/startup-cto/christmas-delivery"
          iconUnicode="\f09b"
        >
          {githubLinkText}
        </FontAwesomeIconLink>
        <FontAwesomeIconLink
          href="https://www.twitch.tv/the_startup_cto"
          iconUnicode="\f1e8"
        >
          {twitchLinkText}
        </FontAwesomeIconLink>
      </InlineList>
    </aside>
  );
}
