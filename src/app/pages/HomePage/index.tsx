import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { NavBar } from '../../shared/containers/NavBar';
import { NavLink } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Top page of shearwater" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <span>HomePage container</span>
        <NavLink to={'/'}>test</NavLink>
      </PageWrapper>
    </>
  );
}
