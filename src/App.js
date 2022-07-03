import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddSerie from "./pages/AddSerie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddSerie />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
