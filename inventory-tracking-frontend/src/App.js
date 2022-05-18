import "./App.css";
import { Routes, Route } from "react-router-dom";

import OptionsBar from "./components/OptionsBar";
import ProductsLayout from "./components/ProductsLayout";
import WarehousesLayout from "./components/WarehousesLayout";
import WarehouseInfo from "./components/WarehouseInfo";
import WarehouseInventory from "./components/WarehouseInventory";
import AddProductForm from "./components/AddProductForm";
import EditProductForm from "./components/EditProductForm";

function App() {
  return (
    <div>
      <OptionsBar />
      <Routes>
        <Route path="/products" element={<ProductsLayout />} />
        <Route path="/warehouses" element={<WarehousesLayout />} />
        <Route path="/warehouses/:id" element={<WarehouseInfo />} />
        <Route
          path="/getWarehouseInventory/:id"
          element={<WarehouseInventory />}
        />
        <Route path="/add_product" element={<AddProductForm />} />
        <Route path="/edit_product/:id" element={<EditProductForm/>} />
      </Routes>
    </div>
  );
}

export default App;
