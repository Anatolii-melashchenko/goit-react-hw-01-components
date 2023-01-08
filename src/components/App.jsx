import user from '../path/user.json'
import Profile from './Profile/Profile.js'
import data from '../path/data.json'
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
                  username={user.username}
                  tag={user.tag}
                  location={user.location}
                  avatar={user.avatar}
                  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
