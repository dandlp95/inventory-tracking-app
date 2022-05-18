import "./App.css";
import { Routes, Route } from "react-router-dom";

import OptionsBar from "./components/OptionsBar";
import ProductsLayout from "./components/ProductsLayout";
import WarehousesLayout from "./components/WarehousesLayout";

function App() {
  return (
    <div>
      <OptionsBar />
      <Routes>
        <Route path="/products" element={<ProductsLayout />} />
        <Route path="/warehouses" element={<WarehousesLayout />} />
      </Routes>
    </div>
  );
}

export default App;
