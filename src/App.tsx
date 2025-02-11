import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import ResourceList from './pages/ResourceList';
import ResourceDetail from './pages/ResourceDetails';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import { useAppTheme } from './store/app.store';

const App: React.FC = () => {
  const Theme = useAppTheme();

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: Theme.theme }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/resource/:resource/:id" element={<ResourceDetail />} />
            <Route path="/resources" element={<ResourceList />} />
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;