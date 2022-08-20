import './App.css';
import { Route, Routes} from "react-router-dom"
import Header from "./Components/Header/Header"
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage/>   
       <Routes>
       <Route path="/header"  element={<Header />} />
       <Route path="/home"  element={<HomePage />} />
       </Routes>
       
    </div>
  );
}

export default App;
