import React from 'react';

const Friend = (props) => {
  return (
    <div className="friend">
      <h1>{props.friend.name}</h1>
      <div className="friend-data">
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
      </div>
      <button type="button" onClick={ () => props.deleteFriend(props.friend.id)}>Remove</button>
      <button type="button" onClick={ () => props.showForm(props.friend.id)}>Update Info</button>
    </div>
  );
}

export default Friend;