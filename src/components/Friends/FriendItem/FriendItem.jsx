import PropTypes from 'prop-types';
import React from 'react'
import friendItemStyle from '../FriendItem/FriendItem.module.css'

const FriendItem = ({ friend: { avatar, name, isOnline } }) => 
    <li className={friendItemStyle.item}>
        {isOnline ? <span className={`${friendItemStyle.status} ${friendItemStyle.online}`}></span> : <span className={`${friendItemStyle.status} ${friendItemStyle.noOnline}`}></span>}
        <img
            className={friendItemStyle.avatar}
            src={avatar}
            alt={name}
            width="50" />
        <p className={friendItemStyle.name}>{name}</p>
</li>



export default FriendItem