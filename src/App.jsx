import './App.css'

// import Apicall from "./Api/Apicall"
// // import ModelList from "./Components/ModelList"

// function App() {

//   return (
//     <>
//        {/* <ModelList/> */}
//       <Apicall/>
//     </>
//   )
// }

// export default App

// App.js
import React, { useState } from "react";
import Apicall from "./Api/Apicall";
import Details from "./Components/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [selectedItem, setSelectedItem] = useState(null);

  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Apicall/>} />
          <Route path="/details/:id" element={<Details/>} />
          {/* <Apicall onItemClick={handleItemClick} />
          {selectedItem && <Details details={selectedItem} />} */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
