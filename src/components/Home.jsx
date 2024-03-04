import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import {user} from '../usefullFunctions/user';

import '../styles/styles.css';


const Home = () => {
  console.log(user)

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;