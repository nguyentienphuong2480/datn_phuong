import { Routes, Route } from "react-router-dom";
import "./App.css";
import ClientRoute from "./route/ClientRoute";
import Dashboard from "./dashboard/DashboardCss";
import ProductDetailPage from "./client/page/ProductDetailPage"

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/*" element={<ClientRoute />} ></Route>
        <Route path="/dashboard/*" element={<Dashboard/>} ></Route>
      </Routes> */}
      <ProductDetailPage/> 
    </>
  );
}

export default App;
