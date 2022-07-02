import React from 'react'
import UserItem from './UserItem'
import Card from '../UIElements/Card'
import './User.css'

const UserList = props => {
  console.log(props);
  if(props.items === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    )
  }

  return <ul className='users-list'>
    {props.items.map(user => (
      <UserItem 
        key={user.id} 
        id={user.id} 
        image={user.image} 
        name={user.name} 
        statusCount={user.thoughts}/>
    ))}
  </ul>
}

export default UserList
