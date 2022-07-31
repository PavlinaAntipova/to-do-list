import {Link} from 'react-router-dom';
import Auth from '../components/Auth';
import {Title, Text} from './style/AuthPages.styled';

export function SignupPage() {
  return (
    <>
      <Title>Create Account</Title>

      <Auth btnText="Sign Up" />
      <Text>
        Already have an account? <Link to="/login">Log In</Link>
      </Text>
    </>
  );
}
