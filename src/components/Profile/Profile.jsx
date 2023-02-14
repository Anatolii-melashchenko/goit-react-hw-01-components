import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  Avatar,
  Name,
  UserInfo,
  StatsEl,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile(props) {
  const { avatar, username = 'undefined', tag, location, stats } = props;

  return (
    <Box
      as="div"
      width={250}
      background="white"
      borderRadius={6}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      mb={10}
    >
      <Box
        as="div"
        p={25}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Box>

      <Box as="ul" display="flex">
        <StatsEl>
          <Label>Followers</Label>
          <Quantity> {stats.followers}</Quantity>
        </StatsEl>
        <StatsEl>
          <Label>Views</Label>
          <Quantity> {stats.views}</Quantity>
        </StatsEl>
        <StatsEl>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsEl>
      </Box>
    </Box>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
