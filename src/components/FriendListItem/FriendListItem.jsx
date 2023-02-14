import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendListItem.styled';

export default function FriendListItem({ friend: { isOnline, avatar, name } }) {
  return (
    <>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
