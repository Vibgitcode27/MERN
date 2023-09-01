import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Creating custom hook;
// You have to  use 'use' before giving name to custom hooks
function useTodos() {
    return [];
  }

// HOOKs are different from functions because rerendering happens at hooks. 

function App() {
  const [count, setCount] = React.useState(
    {
      title : "Vibhor" ,
      description : "is the best"
    }
  )
  const [counter , setCounter] = React.useState(Math.random())
   
  setTimeout(() => {
       setCount(
        {
           title : "Vibhor",
          description : "will be the best"
        }
       ) 
    }, 2000);

    React.useEffect(() =>
    {
      console.log("This is useEffect");
    } , []);
  return (
    <div>
      {count.title}
      <br />
      {count.description}
      <br />
      {counter}
    </div>
  )
}

export default App
