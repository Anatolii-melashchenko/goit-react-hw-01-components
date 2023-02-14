import { Box } from 'components/Box';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { StatsEl } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Box as="ul" mb="10px">
      {friends.map(friend => (
        <StatsEl key={friend.id}>
          <FriendListItem friend={friend} />
        </StatsEl>
      ))}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
