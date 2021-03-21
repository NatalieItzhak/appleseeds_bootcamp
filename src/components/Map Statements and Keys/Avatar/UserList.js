import React from 'react';
import User from './User';


const UsersList = (props) => {

  function getUsers(){

    return props.displayedUsersList.map(userData => <User key={userData.id} user={userData}/>);
    
  }

  return (
    <div className="user-list-container">
      <div className="users-list-wrapper">
      {getUsers()}
      </div>
    </div>
  )
}

export default UsersList;