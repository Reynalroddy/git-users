import React, { useState, useEffect ,useCallback} from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import {useFetch} from '../components';
const AppContext = React.createContext();

const url = 'https://api.github.com';


const AppProvider = ({ children }) => {

  // const [rate,setRate] = useState(null)
const [githubUser,setGithubUser] = useState(mockUser)

const [githubRepos,setGithubRepos] = useState(mockRepos)

const [githubFollowers,setGithubFollowers] = useState(mockFollowers)

const [error,setError] = useState({ show: false, msg: '' })
const searchGithubUser = async (user)=>{
if(user){
// https://api.github.com/users/wesbos)
try {
  const res = await fetch(`${url}/users/${user}`);
const data = await res.json();

if(data){
console.log(data)
setGithubUser(data)
// setError({show: true, msg: '' })
//repos
// https://api.github.com/users/john-smilga/repos?per_page=100
/* .then(response => response.json()).then((data)=>{
setGithubRepos(data)
});

//followers
// https://api.github.com/users/john-smilga/followers/?per_page=100
.then(response => response.json()).then((data)=>{
setGithubFollowers(data)
// console.log(data)
}); */


let urlList = [`${url}/users/${user}/repos?per_page=100`, `${url}/users/${user}/followers?per_page=100`];
let fetches = urlList.map(url => fetch(url).then(res => res.json()));

 await Promise.allSettled(fetches).then((results) =>{ 
const [repos,followers] = results;
      console.log(repos,followers)
      if(repos.status === "fulfilled"){
setGithubRepos(repos.value);


      }

         if(followers.status === "fulfilled"){
setGithubFollowers(followers.value)
      }



    })
 
}

else if(data.message === "Not Found"){
 /*  setError({
 show: true, msg: 'no data found for username' 
  }) */
  console.log('no user');
}
}

catch (error) {
  console.log(error)
}



}




}
// setRate(dataLimit.rate)



//fetch rate
 /* const fetchRate = async ()=>{
   //err
   //loading
const res = await fetch(`${rootUrl}/rate_limit`);
const dat = await res.json();
setRate(dat.rate)
} 
//  console.log(rate)
 useEffect(()=>{

 fetchRate()}, [])  */
// const {used,limit} = rate;
// console.log(data)
  return <AppContext.Provider value={{githubFollowers,githubRepos,githubUser,searchGithubUser,error}}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }

