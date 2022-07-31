import {useLocation} from 'react-router-dom';

import {Header, Logo, Icons, IconChecked, IconUnchecked} from './AppBar.styled';
import UserMenu from '../UserMenu';

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
