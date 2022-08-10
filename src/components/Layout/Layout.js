import {Outlet, useLocation} from 'react-router-dom';

import SideBarContainer from '../SideBar/SideBarContainer';
import MainTodoContainer from '../MainTodo/MainTodoContainer';
import AppBar from '../AppBar/AppBar';

import {MainSection} from './Layout.styled';
import {useMediaQuery} from 'react-responsive';
import {useState} from 'react';

function Layout() {
  const location = useLocation().pathname;
  const isMobile = useMediaQuery({query: '(max-width: 767px)'});
  const [isShownSideBar, setIsShownSideBar] = useState(false);

  const toggleSideBar = () => {
    setIsShownSideBar(prev => !prev);
  };

  return (
    <>
      <AppBar toggleSideBar={toggleSideBar} isShownSideBar={isShownSideBar} />
      <MainSection location={location}>
        {location !== '/' ? (
          <>
            {(!isMobile || isShownSideBar) && (
              <SideBarContainer toggleSideBar={toggleSideBar} />
            )}

            <MainTodoContainer />
          </>
        ) : (
          <Outlet />
        )}
      </MainSection>
    </>
  );
}

export default Layout;
