// import React from 'react';
// import PropTypes from 'prop-types';
// import friendsStyle from '../Task-3/Friends.module.css'

// const FriendsItem = ({ avatar, name, isOnLine }) => {
//     return (
//         <li className={friendsStyle.item}>
//             <span className={`status ${isOnLine ? 'online' : 'offline'}`}></span>
//             <img
//                 className={friendsStyle.avatar}
//                 src={avatar}
//                 alt="User avatar"
//                 width="50" />
//             <p className={friendsStyle.name}>{name}</p>
//         </li>
//     )
// };

// FriendsItem.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnLine: PropTypes.bool.isRequired
// };

// const Friends = ({ friends }) => {
//     return (
//         <ul className={friendsStyle.list}>
//             {friends.map((friend) => (
//                 <FriendsItem key={friend.id} {...friend} />
//             ))}
//         </ul>
//     )
// };

// Friends.propTypes = {
//     friends: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             avatar: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             isOnLine: PropTypes.bool.isRequired
//         })
//     ).isRequired
// };

// export default Friends