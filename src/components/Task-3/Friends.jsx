import React from 'react';
import PropTypes from 'prop-types';
import friendsStyle from '../Task-3/Friends.module.css'

const Friends = ({ friends }) => {
    return <ul className={friendsStyle.list}>
        {friends.map(({ id, avatar, name, isOnline }) =>
            <li className={friendsStyle.item} key={id}>
                {isOnline ? <span className={`${friendsStyle.status} ${friendsStyle.online}`}></span> : <span className={`${friendsStyle.status} ${friendsStyle.noOnline}`}></span>}
                <img
                    className={friendsStyle.avatar}
                    src={avatar}
                    alt={name}
                    width="50" />
                <p className={friendsStyle.name}>{name}</p>
            </li>
        )}
    </ul>
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    )
}
export default Friends