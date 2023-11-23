import { useState } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"; // Fix import statements
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Welcome from "./Welcome";
import Container from "./Container";
import Population from "./Population";
import Nav from "./Nav";
import Range from "./Range";
import Crossover from "./Crossover";
import { MemoryRouter } from "react-router-dom";

function App({callback}) {
  const [greetMsg, setGreetMsg] = useState("");
  const [popMatrix, setPopMatrix] = useState('');
  const [name, setName] = useState("");
  async function createTable(){
    setPopMatrix(await invoke("create_pop_matrix", { popLength, geneLength}))
  }
  async function greeting() {
    setGreetMsg(await invoke("greeting", { name }));
  }
  const [popLength, setPopLength] = useState(4);
  const [geneLength, setGeneLength] = useState(8);

  const handlePopLength = (newValue) =>{
    setPopLength(newValue)
  }

  const handleGeneLength = (newValue) =>{
    setGeneLength(newValue)
  }
  

return (
   <div className="container">
    
      <Routes>
        <Route path="/" element={<Welcome function1={handlePopLength} function2={handleGeneLength} value1={popLength} value2={geneLength}/>} />  
        <Route path="/Range" element={<Range />} />  
        <Route path="/Population" element={<Population lines={popLength} columns={geneLength}/>} />  
        <Route path="/Crossover" element={<Crossover />} />  
        
      </Routes> 
    
      <Nav/>
    
      
   </div>
   
  );
}

export default App;
