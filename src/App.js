import Home from "./pages/Home";
import {Routes, Route } from "react-router-dom";
import Basket from "./pages/Basket";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/basket" element={<Basket/>}/>
        </Routes>
    </div>
  );
}

export default App;


