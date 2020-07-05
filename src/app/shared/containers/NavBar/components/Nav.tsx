import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Nav() {
  return (
    <Wrapper>
      <DocumentItem />
      <GithubItem />
    </Wrapper>
  );
}

function DocumentItem() {
  return (
    <>
      <Item
        href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
        target="_blank"
        title="Documentation Page"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={'file-contract'} />
        Documentation
      </Item>
    </>
  );
}

function GithubItem() {
  return (
    <>
      <Item
        href="https://github.com/kkiyama117/shearwater"
        target="_blank"
        title="Github Page"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'github']} />
        Github
      </Item>
    </>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
