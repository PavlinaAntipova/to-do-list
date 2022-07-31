import {Link} from 'react-router-dom';
import Auth from '../components/Auth';
import {
  Title,
  Text,
  StyledIcon1,
  StyledIcon2,
  StyledIcon3,
} from './style/AuthPages.styled';

import Icon1 from '../images/bg-1.png';
import Icon2 from '../images/bg-2.png';
import Icon3 from '../images/bg-3.png';

export function LoginPage() {
  return (
    <>
      <Title>Enter into your Account</Title>
      <Auth btnText="Log In" />
      <Text>
        Haven't an account yet? <Link to="/signup">Sign Up</Link>
      </Text>
      {/* <StyledIcon1 src={Icon1} alt="bg" />
      <StyledIcon2 src={Icon2} alt="bg" />
      <StyledIcon3 src={Icon3} alt="bg" /> */}
    </>
  );
}
