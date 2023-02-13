import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { Box } from './Box';

export const App = () => {
  return (
    <Box as="div" p={10}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Box>
  );
};
