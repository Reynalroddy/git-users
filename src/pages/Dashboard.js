import React,{useContext} from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { AppContext } from '../context/context';
const Dashboard = () => {



  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      <Info></Info>
      <User></User>
      <Repos></Repos>

    </main>
  );
};

export default Dashboard;
