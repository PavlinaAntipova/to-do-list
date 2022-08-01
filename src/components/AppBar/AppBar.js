import {useLocation} from 'react-router-dom';

import UserMenu from '../UserMenu';

import {Header, Logo, Icons, IconChecked, IconUnchecked} from './AppBar.styled';

function AppBar() {
  const location = useLocation().pathname;

  return (
    <Header>
      <Logo to="/">
        <Icons>
          Y<IconUnchecked />
          ur Planner
          <IconChecked />
        </Icons>
      </Logo>

      {location === '/signup' ||
      location === '/login' ||
      location === '/' ? null : (
        <UserMenu />
      )}
    </Header>
  );
}

export default AppBar;
