  import React from 'react';


const User = (props) => {
  const { firstName, lastName, pictureUrl} = props.user;

  return (
    <div className="user-container">
      <img src={pictureUrl}/>
      <div>{`${firstName} ${lastName}`}</div>
    </div>
  );

}
export default User;