import React from 'react';
import { Route } from 'react-router-dom';

const Landing = React.lazy(() => import('../pages/Landing/Landing'));

const AppRoutes = (
  <React.Fragment>
    <Route path="/*" element={<Landing />} />
    <Route path="/home" element={<Landing />} />
  </React.Fragment>
);

export default AppRoutes;
