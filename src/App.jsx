import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DashBoard from "./Components/Account/DashBoard";
import Login from "./Components/Forms/Login";
import CheckOutPage from "./Pages/CheckOutPage";
import PrivateRoute from "./Components/PrivateRoute";
import WelcomeDashboard from "./Components/Account/WelcomeDashboard";
import Error from "./Components/Error";
import AddProduct from "./Components/Account/UserOperations/AddProduct";
import EditProduct from "./Components/Account/UserOperations/EditProduct";
import DeleteProduct from "./Components/Account/UserOperations/DeleteProduct";
import DetailsPage from "./Pages/DetailsPage";
import ProductList from "./Components/Section/ProductList";

function App() {
  let user = localStorage.getItem("user") == null ? false : true;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<ProductList />} />
          <Route path="/detail/:id" element={<DetailsPage />} />
          <Route path="/login" element={user ? <DashBoard /> : <Login />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          >
            <Route index element={<WelcomeDashboard />} />
            <Route path="/account/err" element={<Error />} />
            <Route path="/account/add-product" element={<AddProduct />} />
            <Route path="/account/edit-product" element={<EditProduct />} />
            <Route path="/account/delete-product" element={<DeleteProduct />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
