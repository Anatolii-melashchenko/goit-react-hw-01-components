import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Avatar, Name, StatsEl, Status } from './FriendList.styled';

export default function FriendList(props) {
  const { friends } = props;

  return (
    <Box as="ul" mb="10px">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <StatsEl key={id}>
          <Status isOnline={isOnline}>{isOnline}</Status>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{name}</Name>
        </StatsEl>
      ))}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
