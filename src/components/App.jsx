import React from 'react';

import Profile from './Profile/Profile'
import user from '../data/user.json'

import Statistics from './Statistic/Statistic'
import data from '../data/data.json'

import Friends from './Friends/Friends';
import friends from '../data/friends.json'

import Transaction from './Transaction/Transaction';
import transaction from '../data/transactions.json'


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
      <Friends friends={friends} />
      <Transaction transaction={transaction} />
      
    </div>
    
  )
};

export default App;