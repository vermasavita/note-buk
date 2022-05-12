import { Routes, Route } from "react-router-dom";
import { Archive, Login, Notes, Signup, Trash } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/trash" element={<Trash />}></Route>
      </Routes>
    </div>
  );
}

export default App;
