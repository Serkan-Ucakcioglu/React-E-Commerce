import './App.css';
import { Route, Routes,NavLink} from "react-router-dom"
import Header from "./Components/Header/Header"

function App() {
  return (
    <div className="App">   
       <Routes>
       <Route path="/header"  element={<Header />} />
       </Routes>
    </div>
  );
}

export default App;
