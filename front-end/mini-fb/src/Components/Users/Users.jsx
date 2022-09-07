import React, { useEffect, useState } from 'react'
import UserList from './UserList'
import ErrorModal from '../UIElements/Elements/ErrorModal';
import LoadingSpinner from '../UIElements/Elements/LoadingSpinner';

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

    const USERS = [
        {
            id: '1',
            name: 'Saleheen Shafiq',
            image: './self.jpg',
            thoughts: 3
        }
    ];

    useEffect(() => {
      const sendRequest = async () => {
        setIsLoading(true);
        try {
          const response = await fetch('http://localhost:5000/api/users');

          const responseData = await response.json();

          if(!response.ok) {
            throw new Error(responseData.message);
          }

          setLoadedUsers(responseData.users);
        } catch (err){
          setError(err.message);
        }
        setIsLoading(false);
      };
      sendRequest();
    }, [])

    const errorHandler = () => {
      setError(null);
    }
    
  return (
    <div>
      <React.Fragment>
        {/* <ErrorModal error={error} onClear={errorHandler} /> */}
        {isLoading && (
          <div className='center'>
            <LoadingSpinner />
          </div>)}
        {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
      </React.Fragment>
    </div>
  )
}

export default Users
