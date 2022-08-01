import Avatar from 'react-avatar';
import {useState} from 'react';

import Modal from '../Modal';
import UserStatistics from '../UserStatistics';

import {StyledUserMenu} from './UserMenu.styled';

function UserMenu() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <StyledUserMenu onClick={() => toggleModal()}>
        <Avatar name="Statistics" size="30" round />
        <p>Your Statistics</p>
      </StyledUserMenu>

      {showModal && (
        <Modal toggleModal={toggleModal}>
          <UserStatistics />
        </Modal>
      )}
    </div>
  );
}

export default UserMenu;
