import React from 'react'
import UserList from './UserList'

const Users = () => {
    const USERS = [
        {
            id: '1',
            name: 'Saleheen Shafiq',
            image: './self.jpg',
            thoughts: 3
        }
    ];
    
  return (
    <div>
        <UserList items={USERS} />
    </div>
  )
}

export default Users
