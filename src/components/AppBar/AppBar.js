import {useLocation} from 'react-router-dom';
import {BsArrowBarRight, BsArrowBarLeft} from 'react-icons/bs';

import UserMenu from '../UserMenu';

import {
  Header,
  Logo,
  Icons,
  IconChecked,
  IconUnchecked,
  SideBarBtn,
} from './AppBar.styled';
import {theme} from '../../helper/theme';
import {useMediaQuery} from 'react-responsive';

function AppBar({toggleSideBar, isShownSideBar}) {
  const location = useLocation().pathname;
  const isMobile = useMediaQuery({query: '(max-width: 767px)'});

  return (
    <Header>
      {location === '/' ? null : (
        <>
          {isMobile && (
            <SideBarBtn onClick={() => toggleSideBar()}>
              {isShownSideBar ? (
                <BsArrowBarLeft size={25} color={theme.mainAccentColor} />
              ) : (
                <BsArrowBarRight size={25} color={theme.mainAccentColor} />
              )}
            </SideBarBtn>
          )}
        </>
      )}

      <Logo to="/">
        <Icons>
          Y<IconUnchecked />
          ur Planner
          <IconChecked />
        </Icons>
      </Logo>

      {location === '/' ? null : <UserMenu />}
    </Header>
  );
}

export default AppBar;
