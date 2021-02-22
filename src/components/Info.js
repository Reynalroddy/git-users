import React,{useContext} from 'react';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { AppContext } from '../context/context';
const UserInfo = () => {

 const {githubUser} = useContext(AppContext);
 const {public_gists,public_repos,followers,following} = githubUser
  return <Wrapper className="py-5">
<div className="container">
<div className="row">
<div className="col-md-3 col-12 ">
  <div className="card bg-white">
  <div className="card-body d-flex  justify-content-around rounded">
     <div className="imgg">
<span className="pink"><GoRepo className="icon"></GoRepo></span>
     </div>
      <div className="inf">
<h3>{public_repos}</h3>
<p>repos</p>
     </div>
   
  </div>
  </div>
 
</div>

<div className="col-md-3 col-12  ">
  <div className="card bg-white">
 <div className="card-body d-flex  justify-content-around rounded">
     <div className="imgg">
<span className="green"><FiUsers className="icon"></FiUsers></span>
     </div>
      <div className="inf">
<h3>{followers}</h3>
<p>followers</p>
     </div>
   
  </div>
  </div>
   
</div>

<div className="col-md-3 col-12 ">
  <div className="card bg-white">
 <div className="card-body d-flex  justify-content-around rounded">
     <div className="imgg">
<span className="purple"><FiUserPlus className="icon"></FiUserPlus></span>
     </div>
      <div className="inf">
<h3>{following}</h3>
<p>following</p>
     </div>
   
  </div>
  </div>
   
</div>

<div className="col-md-3 col-12  ">
  <div className="card bg-white" >
 <div className="card-body d-flex  justify-content-around rounded">
     <div className="imgg">
<span className="yellow"><GoGist className="icon"></GoGist></span>
     </div>
      <div className="inf">
<h3>{public_gists}</h3>
<p>gists</p>
     </div>
   
  </div>
  </div>
   
</div>

</div>


</div>


  </Wrapper>;
};

const Wrapper = styled.section`

  
  span {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
 
}
   
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`; 

export default UserInfo;
