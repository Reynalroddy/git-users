import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return <section className="error-section">
<div className="container">
  <div className="row justify-content-center align-items-center h-100 text-center">
    <div className="col-10 mx-auto">
      <h1 className="font-weight-bold">404</h1>
      <h3>sorry, the page requested isnt found!</h3>
      <Link to="/" className="btnn font-weight-bold">back home</Link>
    </div>
  </div>
</div>



  </section>;
};/* 
const Wrapper = styled.section`
row{
 min-height: 100vh;
}
  background: var(--clr-primary-10);
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`; */
export default Error;
