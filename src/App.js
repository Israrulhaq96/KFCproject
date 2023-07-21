import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Bucket from "./Bucket";
function App() {

  return (
    <div style={{ background: "black" }}>
      <div className="row row-cols-2">
      <div className="col " style={{width:"80%"}}>
        <div className="container my-5"><Navbar /> </div>
            <div className="container my-5" >
              <Card /></div>
              </div>
        
            <div className="col" style={{width:"20%"}}>
              <Bucket />
            </div>
          </div>
         
       
          </div>
  );
}

export default App;
