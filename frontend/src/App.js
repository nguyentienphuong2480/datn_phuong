import { Routes, Route } from "react-router-dom";
import "./App.css";
import ClientRoute from "./route/ClientRoute";
import AdminRoute from "./route/AdminRoute";


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<ClientRoute />} ></Route>
        <Route path="/admin/*" element={<AdminRoute/>} ></Route>
      </Routes>
    </>
  );
}

export default App;
