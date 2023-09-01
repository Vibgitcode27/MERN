import { useState } from 'react'
// import './App.css'
import Signup from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import Appbar from "./Appbar.jsx";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'


// function App() {
//   return (
//     <div style={{
//       backgroundColor : "#eeeeee" ,
//       height : "100vh" ,
//       width : "100vw"
//     }}>

//       {/* <Appbar></Appbar>
//       <Signup ></Signup> */}
//     </div>
//   )
// }

function App()
{
  return (
    <div style={{
            backgroundColor : "#eeeeee" ,
            height : "100vh" ,
            width : "100vw"
          }}>
    <Appbar></Appbar>
    <Router>
      <Routes>
        <Route path = "/login" element = {<SignIn />} />
        <Route path = "/signup" element = {<Signup />} />
      </Routes>
    </Router>
    </div>
    )
}

export default App
