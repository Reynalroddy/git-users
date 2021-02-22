import React,{useContext} from 'react';
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { AppContext } from '../context/context';
import { Link } from 'react-router-dom';
const User = () => {

   const {githubUser} = useContext(AppContext);
      const {githubFollowers} = useContext(AppContext);

   const {avatar_url,html_url,name,company,blog,bio,location,twitter_username} = githubUser;
  return <Wrapper className="py-5">
    <div className="container">
      <div className="row m-0">
     
        <div className="col-md-6 article col-12 py-3">
<div className="row">
  <div className="col-3 py-3">
    <div className="d-flex">
<img src={avatar_url} alt="" className="img-fluid rounded-circle"/>
<span className="ml-2"><p>{name}</p> <p>@{twitter_username}</p></span>
    </div>

  </div>
   <div className="col-8 text-right py-3">
    <a href={html_url} className="btnn">follow</a>
  </div>
</div>
<div className="row">
  <p>{bio}</p>
</div>

<div className="row flex-column">
  <p><MdBusiness className="ml-1"></MdBusiness>{company}</p>
  <p><MdLocationOn className="ml-1"></MdLocationOn>{location}</p>
  <a href={`https:${blog}`} className="d-block"><MdLink className="ml-1"></MdLink>{blog}</a>
</div> 
         </div>

         <div className="col-md-6  col-12 py-3 ">
          <div className="followers">
            {githubFollowers.map((follower,index)=>{
              const {avatar_url,html_url,login} = follower
return <div className="row py-2 justify-content-center" key={index}>
  <div className="col text-center">
 <img src={avatar_url} alt="" className=" rounded-circle img-fluid imgg"/>
  </div>
 <div className="col">
<p>{login}</p>
<a href={html_url}>{html_url}</a>
 </div>
  
</div>

            })}
          </div>
        </div>
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
.article{
    background: var(--clr-white);

  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
  
    letter-spacing: var(--spacing);
    font-size: 1rem;
  };


}
.followers {

  overflow:scroll;
  height: 260px;
}
.imgg{
  width:60px;
  height:60px
}
`;

export default User;
