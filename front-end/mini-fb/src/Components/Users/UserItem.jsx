import React from 'react'
import { Link } from 'react-router-dom';
import './User.css'
import Avatar from '../UIElements/Avatar';
import Card from '../UIElements/Card';

const UserItem = props => {
  return (
    <div>
      <li className='user-item'>
        <Card className='user-item__content'>
          <Link to={`/${props.id}/thoughts`}>
            <div className="user-item__image m-4 mt-5">
                <Avatar image={props.image} alt={props.name} />
            </div>
            <div className="user-item__info">
                <h2>{props.name}</h2>
                <h5>{props.statusCount} {props.statusCount === 1 ? 'Thought' : 'Thoughts'}</h5>
            </div>
          </Link>
        </Card>
      </li>
    </div>
  )
}

export default UserItem
