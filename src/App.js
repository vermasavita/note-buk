import { Routes, Route } from "react-router-dom";
import { Archive, Home, Login, Notes, Signup, Trash, Tag, Error404 } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequiresAuth } from "./RequireAuth";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/notes"
          element={
            <RequiresAuth>
              <Notes />
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/archive"
          element={
            <RequiresAuth>
              <Archive />
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/trash"
          element={
            <RequiresAuth>
              <Trash />
            </RequiresAuth>
          }
        ></Route>

        <Route
          path="/tags/:tagName"
          element={
            <RequiresAuth>
              <Tag />
            </RequiresAuth>
          }
        ></Route>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
