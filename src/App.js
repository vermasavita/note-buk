import { Routes, Route } from "react-router-dom";
import { Login, Notes, Signup } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/notes" element={<Notes />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
