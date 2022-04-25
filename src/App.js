import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";
import UploadPage from "./components/uploadpage/UploadPage";
import VideoEdit from "./components/videoeditor/VideoEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/upload" element={<UploadPage />} />
        <Route exact path="/video" element={<VideoEdit />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
