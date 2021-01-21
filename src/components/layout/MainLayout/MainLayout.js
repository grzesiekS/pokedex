import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({children}) => (
  <div>
    <h1>Main Layout</h1>
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;