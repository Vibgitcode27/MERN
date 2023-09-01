import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let cr = 0;
function App() {

  // React.useState is called hook in React
  // hook is anything that remains out of reranders 
  const [todos, setTodos] = React.useState(
    // [
      {
    title : "go to gym" ,
    description : "go to gym11",
    id : 1
  }
  // ,
// {
//   title : "go to gym" ,
//   description : "go to gym12",
//   id : 2
// }]
);

// To stop running render multiple times


  if(cr == 0)
  {
    console.log("render");
      setTimeout(() => {
        setTodos ({
            title : "EAT" ,
            description : "Drink",
            id : 1
          })
      }, 3000);
      cr = 1;
  }  
  else
  {

  }
   return (
   <div>
    <p>This is vibhor</p>
    <br />
    {todos.title}
    <br />
    {todos.description}
    <br />
    {/* {todos.map((item) =>
    {
      return (
        <Todo title = {item.title} description = {item.description}></Todo>

        // OR
        
        // <div>
        //   {item.title}
        //   <br />
        //   {item.description}
        // </div>
      )
    })} */}
    <p>HEy</p>
   </div>

   )
}

function Todo(props)
{
  return (
      <div>
          <br />
          {props.title}
          <br />
          {props.description}
          <br />
      </div>
  )
}
export default App
