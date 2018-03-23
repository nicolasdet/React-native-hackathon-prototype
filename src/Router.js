import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
          <Scene
            initial
            hideNavBar='true'
            key="Home"
            component={Home}
            title="page Home"
            duration={400}
          />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
