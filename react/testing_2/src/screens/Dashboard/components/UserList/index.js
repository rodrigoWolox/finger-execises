import React from 'react';
import UserRow from '../UserRow';

import './styles.css';

function UserList ({users}) {
  return (
    <div className={`user-list`}>
      {users.map(user => <UserRow user={user} />)}
    </div>
  );
}

export default UserList;