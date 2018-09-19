import React from 'react';
import UserRow from '../UserRow';

import './styles.css';

function UserList ({users}) {
  return (
    <div className={`user-list`}>
      {users && users.map(user => <UserRow user={user} key={user.id} />)}
    </div>
  );
}

export default UserList;