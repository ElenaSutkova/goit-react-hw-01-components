import React from 'react';

import Profile from '../components/Task-1/Profile'
import user from '../components/Task-1/user.json'

import Statistics from '../components/Task-2/Statistic'
import data from '../components/Task-2/data.json'

export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={data} />
    </div>
    
  )
};
