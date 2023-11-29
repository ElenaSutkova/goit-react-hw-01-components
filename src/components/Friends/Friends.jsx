import React from 'react';
import PropTypes from 'prop-types';
import friendsStyle from '../Friends/Friends.module.css'
import FriendItem from '../Friends/FriendItem/FriendItem'

const Friends = ({ friends }) => {
    return <ul className={friendsStyle.list}>
        {friends.map(friend => <FriendItem friend={friend} key={[friend.id]} />
        )}
    </ul>
};

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            friend: PropTypes.object,
        })
    )
}

export default Friends