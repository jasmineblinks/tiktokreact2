import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import ProfileHeader from "./components/profileheader/ProfileHeader";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
