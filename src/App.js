import { Routes, Route } from "react-router-dom";
import { Login } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
