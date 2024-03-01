import React from 'react';
import Header from './Header';
import {user} from '../usefullFunctions/user';

const Home = () => {
  console.log(user)
  return (
    <div>
      <Header user={user}/>
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page of our application.</p>
    </div>
  );
};

export default Home;