import 'focus-visible'; // use focus-visible library
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { URL } from './constants/url';
import GlobalStyles from './GlobalStyles';
import CheckboxPage from './pages/CheckboxPage';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

const routes = [
  { path: URL.HOME, element: <Home /> },
  { path:  URL.CHECKBOX, element: <CheckboxPage /> },
  { path: URL.ETC, element: <NoMatch /> },
];

function App() {
  const element = useRoutes(routes);

  return (
    <>
      <GlobalStyles />
      {element}
    </>
  );
}

export default App;
