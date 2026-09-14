import { useState, useEffect } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import {Routes,Route, Navigate} from 'react-router-dom'
import '../Styles/App.css'
import Dashboard from './Dashboard.jsx';
import Login from './log.jsx';
import Technician from './Technician.jsx'
import Bill from './Bill.jsx'
import Settings from './Settings.jsx'
import Customers from './Customers.jsx'
import Feedback from './Feedback.jsx'
import Nav from './Nav.jsx'
import Welcome from './Welcome.jsx'

function App() {

  const setLogin = (value) => {
    localStorage.setItem("isLogin", value)
  }

  console.log("APP", localStorage.getItem("isLogin"))

  return (
//     <>
//       <section id="center">
//         <div className="hero">
//           {console.log("Hi Hari")}
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
         
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="hari"
//           onClick={() => setCount((count) => count + 2)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//               </a>
//                 <p>Explore Vite</p>

//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>
//       <div className="ticks"></div>
//       <section id="spacer"></section>
    
   <>


<Nav />

<div>
  {/* {console.log("app - login", localStorage.getItem("isLogin"))} */}
<Routes>
  {localStorage.getItem("isLogin") ? <>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/bill" element={<Bill/>}/>
  <Route path="/settings" element={<Settings/>}/>
  <Route path="/feedback" element={<Feedback/>}/>
  <Route path="/customer" element={<Customers/>}/>
  <Route path="/technician" element={<Technician/>}/>
  </> : <Route path="/login" element={<Login setLogin={setLogin}/>}/>}
  {/* <Route path="*" element={<Navigate to="/" replace/>} /> */}
    <Route path="*" element={<Welcome/>} />

</Routes>
</div>

</>
  ) 
}

export default App
