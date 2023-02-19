import React from 'react';

import GetUsers from '../../functions/GetUsers';

import './User.css';

const User = (props) => {
    const users = GetUsers();

    let user = null;
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.id === props.id) {
            user = element;
        }
    }

    if (user === null) {
        return <div>User don't exist</div>;
    }

    return (
        <div className={'user-container ' + props.className}>
            <img src={user.profilePicture} alt={user.id} />
            <p>{user.name}</p>
        </div>
    );
};

export default User;
