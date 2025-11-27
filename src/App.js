import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./components/start/Start";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
