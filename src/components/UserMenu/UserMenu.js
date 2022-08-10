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
        <p>Your Stats</p>
      </StyledUserMenu>

      {showModal && (
        <Modal toggleModal={toggleModal}>
          <UserStatistics toggleModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
}

export default UserMenu;
