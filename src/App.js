import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomeLayout from "./layouts/homeLayout/HomeLayout";
import AppTable from "./pages/AppTable";
import LoginHistory from "./pages/LoginHistory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<AppTable />} />
          <Route path="login history" element={<LoginHistory />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
