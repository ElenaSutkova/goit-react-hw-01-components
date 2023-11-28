import React from 'react';

import Profile from '../components/Task-1/Profile'
import user from '../data/user.json'

import Statistics from '../components/Task-2/Statistic'
import data from '../data/data.json'

import Friends from '../components/Task-3/Friends';
import friends from '../data/friends.json'

import Transaction from '../components/Task-4/Transaction';
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