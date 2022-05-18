import { Link } from "react-router-dom";

function OptionsBar() {
  return (
    <header>
      <div>Inventory Manager</div>

      <nav>
        <ul>
          <li>
            <Link to="/products">All Products</Link>
          </li>
          <li>
            <Link to="/warehouses">All Warehouses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default OptionsBar;