import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
const Login = () => {
  const{ loginWithRedirect } = useAuth0();
  return <section className="login-section">
    <div className="container">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-6 mx-auto text-center">
<img src={loginImg} alt="img" className="img-fluid"/>
<h1>Github User</h1>
<button className="btnn" onClick={loginWithRedirect}>Login / Sign up</button>
        </div>
      </div>
    </div>
  </section>;
};/* 
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`; */
export default Login;
