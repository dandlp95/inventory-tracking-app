import "./App.css";
import { Routes, Route } from "react-router-dom";

import OptionsBar from "./components/OptionsBar";
import ProductsLayout from "./components/ProductsLayout";
import WarehousesLayout from "./components/WarehousesLayout";
import WarehouseInventory from "./components/WarehouseInventory"

function App() {
  return (
    <div>
      <OptionsBar />
      <Routes>
        <Route path="/products" element={<ProductsLayout />} />
        <Route path="/warehouses" element={<WarehousesLayout />} />
        <Route path="/warehouses/:id" element={<WarehouseInventory/>}/>
      </Routes>
    </div>
  );
}

export default App;
