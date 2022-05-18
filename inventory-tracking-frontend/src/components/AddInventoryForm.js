import { useEffect, useState } from "react";
import { useParams, Link, Route, Routes } from "react-router-dom";
import axios from "axios";

function AddInventoryForm() {
  const urlAllWarehouses = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState(null);

  useEffect(() => {
    axios.get(urlAllWarehouses).then((response) => {
      setWarehouses(response.data);
    });
  }, [urlAllWarehouses]);

  if (warehouses) {
      return(
          <form>
              <label ></label>
          </form>
      )
  }
}

export default AddInventoryForm;
