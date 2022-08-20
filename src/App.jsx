import './App.css';
import { Route, Routes} from "react-router-dom"
import Header from "./Components/Header/Header"
import HomePage from './Pages/HomePage';
import ProductList from './Components/Section/ProductList';

function App() {
  return (
    <div className="App">
      <HomePage/>   
       <Routes>
       <Route path="/header"  element={<Header />} />
       <Route path="/home"  element={<HomePage />} />
       <Route path="/product/:id"  element={<ProductList />} />
       </Routes>
       
    </div>
  );
}

export default App;
