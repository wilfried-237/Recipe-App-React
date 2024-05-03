import { NavLink } from "react-router-dom";
import "./index.css";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam} = useContext(GlobalContext);

  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          FoodRecipe
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/favorites"} className="nav-link">
                Favorites
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              value={searchParam}
              onChange={(event) => setSearchParam(event.target.value)}
              placeholder="Enter Item..."
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
