import React,{useContext} from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D ,Spline} from './Charts';
const Repos = () => {
  const {githubRepos} = useContext(AppContext);
  // console.log(githubRepos)

  const languages = githubRepos.reduce((acc,curr)=>{
const {language,stargazers_count} = curr

if(!language) return acc;
// acc[language] = 30

if(!acc[language]){
acc[language] = {label:language,value:1,stars:stargazers_count}
}
else{
acc[language] = {...acc[language],value:acc[language].value + 1,stars:acc[language].stars + stargazers_count}
}
// console.log(language)
return acc
},{})
//didnt work
//languages = Array.from(languages) 
 const mostUsed = Object.values(languages).sort((a,b)=>{
return b.value - a.value

 }).slice(0,5);
// console.log(languages);
const popular =  Object.values(languages).sort((a,b)=>{
return b.stars - a.stars
 }).map((item)=>{
return {...item,value:item.stars}
 }).slice(0,5);
// console.log(popular)



//stars and forks
let {stars,forks} = githubRepos.reduce((acc,curr)=>{

const {stargazers_count,name,forks} = curr;
acc.stars[stargazers_count] = {label:name,value:stargazers_count}
acc.forks[name]={label:name,value:forks}
return acc
},{stars:{},
forks:{}})
stars = Object.values(stars).slice(-5).reverse()
/* starss = Object.values(stars).slice(0,5)
forkss = Object.values(forks).slice(0,5) */
forks = Object.values(forks).sort((a,b)=>{
return b.value - a.value
}).slice(0,5)
// console.log(forks)


//spline
let {starss,forkss,categories} = githubRepos.reduce((acc,curr)=>{

const {stargazers_count,name,forks} = curr;
acc.starss[name] = {value:stargazers_count}
acc.forkss[name] =  {value:forks};
acc.categories[name] =  {label:name};
return acc;
},{starss:{},forkss:{},categories:{}})
 starss = Object.values(starss).slice(0,5)
forkss = Object.values(forkss).slice(0,5)
categories = Object.values(categories).slice(0,5)
// console.log(forkss)
const chartData = [
  {
    label: "HTML",
    value: "13"
  },
  {
    label: "CSS",
    value: "160"
  },
  {
    label: "JAVASCRIPT",
    value: "80"
  },

];

  return <Wrapper className="py-5">
<div className="container">
  <div className="row py-3">


       <div className="col-12 col-md-6 cc">
{/* <ExampleChart data = {chartData}></ExampleChart> */}
<Pie3D  data = {mostUsed}></Pie3D>
    </div>

           <div className="col-12 col-md-6 cc">
{/* <ExampleChart data = {chartData}></ExampleChart> */}
<Column3D  data = {stars}></Column3D>
    </div>
 
  </div>


    <div className="row py-3">


       <div className="col-12 col-md-6 ">
{/* <ExampleChart data = {chartData}></ExampleChart> */}
<Doughnut2D  data = {popular}></Doughnut2D>
    </div>

           <div className="col-12 col-md-6 ">
{/* <ExampleChart data = {chartData}></ExampleChart> */}
<Bar3D  data = {forks}></Bar3D>
    </div>

  </div>

    <div className="row py-3">


       <div className="col-12 col-md-12 ">
{/* <ExampleChart data = {chartData}></ExampleChart> */}
<Spline  data1 = {forkss} data2 = {starss} category={categories} ></Spline>
    </div>

         

  </div>
 
</div>
  </Wrapper>
}


const Wrapper = styled.section`
  cc div {
    width: 100% !important;
  }
  cc .fusioncharts-container {
    width: 100% !important;
  }
  cc svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`; 

export default Repos;
