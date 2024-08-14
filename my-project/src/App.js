import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Bag from "./components/Props-children/Bag";
import User from "./components/Props-children/User";
import React, { useState } from "react";
import HeaderStyle from "./components/Styling/HeaderStyle";
import EventIssues from "./components/Events/EventIssues";
import ModeToggler from "./components/Events/ModeToggler";
import InputWithHook from "./components/Hooks/InputWithHook";
import UseStateHook from "./components/Hooks/UseStateHook";
import InputForm from "./components/Hooks/InputForm";
import Promo from "./components/Props-drilling/Promo";
import Nav from "./components/Context/Nav";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
// function App() {
//   const userData = [
//     { name: "Su Su", age: 25 },
//     { name: "John", age: 30 },
//     { name: "Rose", age: 35 },
//   ];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Promo />
//         {/* <InputForm /> */}
//         {/* <UseStateHook /> */}
//         {/* <InputWithHook /> */}
//         {/* <ModeToggler />
//         <EventIssues />
//         <HeaderStyle />
//         <Nav />
//         <img src={logo} className="App-logo" alt="logo" /> */}
//         {/* <h1>Hello React</h1> */}
//         {/* <Button />
//         <Header name="Header 1" />
//         <Header name="This is Header" text="Hello" /> */}
//         {/* <Bag>
//           <h1>This is Bag.</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
//             corrupti dolores, impedit cumque tempora architecto accusamus quo
//             minima quos a sint! Earum quasi fugiat eius, esse veniam dolores
//             unde consequatur!
//           </p>
//         </Bag>
//         <Bag>
//           <h2>Hello Bag 2</h2>
//         </Bag> */}
//         {/* {userData &&
//           userData.length > 0 &&
//           userData.map((user, index) => {
//             return (
//               <React.Fragment key={index}>
//                 <User user={user}></User>
//               </React.Fragment>
//             );
//           })} */}
//       </header>
//     </div>
//   );
// }

// export const Context = React.createContext();
// function App() {
//   const [signedIn, setSignedIn] = useState(false);
//   return (
//     <Context.Provider value={[signedIn, setSignedIn]}>

//       <Nav></Nav>
//       <h1>{signedIn ? "Please signed in" : "You can signed out"}</h1>
//     </Context.Provider>
//   );
// }
export const Context = React.createContext();
function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      {/* <a href="/about">Go to about</a> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </Context.Provider>
  );
}
export default App;
