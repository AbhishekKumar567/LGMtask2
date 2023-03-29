import React from 'react'
import { useState } from 'react';
import './Data.css'

export const Data = () => {
    
  const [userData, setuserData] = useState([]);

  const getUsers = async () => {

    const res = await fetch('https://reqres.in/api/users/');
    const output = await res.json();
    setuserData(output.data);
  };

  return (
    <div className="myUserData">
      <nav className="navbar">
        <p className="navbartext">My_Users</p>
        <button onClick={getUsers} className="btnGetUsers">GET USERS</button>
      </nav>
      <div className="userDataHolder">
        {userData.map((user) => {
          return (
            <div className="userInfo">
              <img src={user.avatar} key={user.avatar} className="userImg" />
              <h4 key={user.first_name} className="userName">{user.first_name} {user.last_name}</h4>
              <p key={user.email} className="userEmail">{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
