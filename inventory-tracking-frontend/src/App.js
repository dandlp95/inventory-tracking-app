import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OptionsBar from "./components/OptionsBar";
import ProductsLayout from "./components/ProductsLayout";
import WarehousesLayout from "./components/WarehousesLayout";

function App() {
  return (
    <Router>
      <OptionsBar />
      <Routes>
        <Route path="/products" element={<ProductsLayout/>}/>
        <Route path="/warehouses" element={<WarehousesLayout/>}/>
      </Routes>
    </Router>
  );
}

export default App;
