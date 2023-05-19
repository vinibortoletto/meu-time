import { render } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import React, { ReactElement } from 'react';
import { Router } from 'react-router-dom';

const renderWithRouter = (component: ReactElement, route = '/') => {
  const history = createBrowserHistory();
  history.push(route);

  const { ...resources } = render(
    <Router history={history}>{component}</Router>
  );
  return { ...resources, history };
};

export default renderWithRouter;
