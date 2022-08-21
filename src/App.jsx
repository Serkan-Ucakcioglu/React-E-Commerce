import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import Login from "./Components/Forms/Login";
import Register from "./Components/Forms/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailsPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
