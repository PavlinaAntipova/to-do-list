import SideBarContainer from '../SideBar/SideBarContainer';
import MainTodoContainer from '../MainTodo/MainTodoContainer';
import AppBar from '../AppBar/AppBar';
import {Outlet, useLocation} from 'react-router-dom';
import {MainSection, TodoContainer} from './Layout.styled';

function Layout() {
  const location = useLocation().pathname;

  return (
    <>
      <AppBar />
      <MainSection location={location}>
        {location !== '/signup' && location !== '/login' && location !== '/' ? (
          <>
            <SideBarContainer />
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
