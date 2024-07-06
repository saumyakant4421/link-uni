import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute />} >
            <Route path="/" element={<Home />} />
            <Route path="/my-profile" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
