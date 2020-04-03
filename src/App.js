import React from 'react';
import DesktopApp from './components/App';
import TabletApp from './components/responsive/tablet/App';
import MobileApp from './components/responsive/mobile/App';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const App = () => {
  return (
    <div>
      <Desktop>
        <DesktopApp />
      </Desktop>
      <Tablet>
        <TabletApp />
      </Tablet>
      <Mobile>
        <MobileApp />
      </Mobile>
    </div>
  );
};

export default App;
