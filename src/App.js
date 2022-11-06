import Labs from './labs';
import Nav from './nav';
import Tuiter from './tuiter';
import {BrowserRouter} from "react-router-dom";
import {Route,Routes} from  "react-router";
import React from 'react'
function App() {
  return (
    <BrowserRouter>
      <div className="container">
       <Nav/>
        <Routes>
          <Route index element={<h1>Hello</h1>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>

         
        </Routes>
        
        
         
     
      </div>
    </BrowserRouter>
  );
}

export default App;
