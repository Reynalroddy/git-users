import React ,{useContext,useState} from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { AppContext } from '../context/context';
import {useFetch} from '../components';
const Search = () => {
    const [query,setQuery] = useState('rate_limit')
    const {isLoading,err,data:rates} = useFetch(`/${query}`)
  const {rate,searchGithubUser,error} = useContext(AppContext)
const[user,setUser] = useState("bradtraversy") 
console.log(error)
const handleSubmit = (e)=>{
e.preventDefault()
searchGithubUser(user)
}
if(isLoading){
return <>
<h3>loading....</h3>

</>

}
  // const {used,limit} = useContext(AppContext);
const {used,limit} = rates.rate;
// const dat = Object.values(data)
  // setTrial(limit);
// setTried(used)
// console.log(used,limit)
// console.log(rate)
  return <section>
<div className="container">
  <div className="row">
<div className="col-10 mx-auto col-md-10">
  <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="user" className="form-label">github user</label>
    <input type="text" className="form-control" id="user"  value={user} onChange={(e)=>setUser(e.target.value)} required/>
    <button type="submit" className="btn btn-primary my-2" >search</button>
  </div>
  </form>

  {error.show &&
  <h5>{error.msg}</h5>}
</div>
<div className="col-2 col-md-2 pt-5">
  <h5>request:<span>{used}/{limit}</span></h5>
</div>
  </div>


</div>
  </section>;
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
