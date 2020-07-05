import React from 'react';
import { NotFoundPage } from '../index';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';
import { Link } from 'app/shared/components/Link';

const renderPage = () =>
  renderer.create(
    <MemoryRouter>
      <ThemeProvider theme={themes.light}>
        <HelmetProvider>
          <NotFoundPage />
        </HelmetProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );

describe('<NotFoundPage />', () => {
  it('should match snapshot', () => {
    const notFoundPage = renderPage();
    expect(notFoundPage.toJSON()).toMatchSnapshot();
  });

  // TODO: Use mock
  // https://qiita.com/r_1105/items/ddcb1ac56df13a0c77ca
  // it('should should contain Link', () => {
  //   const notFoundPage = renderPage();
  //   expect(notFoundPage.root.findByType(Link)).toBeDefined();
  // });
});
