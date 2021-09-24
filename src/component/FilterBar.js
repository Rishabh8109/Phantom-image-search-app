import React from "react";
import Colors from "./Colors";
import { GrFormCheckmark } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import qs from "query-string";

function FilterBar({ setorientation, setrelevent, setcolor }) {
  const { url } = useRouteMatch();
  const getURL = new URL(window.location.href);
  const params = new URLSearchParams(getURL.search);
  const queryParam = qs.parse(useLocation().search);
  const searchQuery = qs.parse(useLocation().search);

  // Dropdown show & hide
  function showHide(className) {
    const element = document.querySelector(`.${className}`);
    const lastChild = element.lastChild;

    if (lastChild.classList.contains("show")) {
      element.lastChild.classList.remove("show");
    } else {
      element.lastChild.classList.add("show");
    }
  }

  // dropdown event handling
  function dropdownEvent(className) {
    showHide(className);
  }

  // Orientatino handler
  function orientationHandler(id, title, className, value) {
    setorientation(title);
    showHide(className);
  }

  // relevent hanlder
  function ByRelevent(title, className, value) {
    setrelevent(title);
    showHide(className);
  }

  // search by color
  function searchByColor(name, className) {
    setcolor(name);
    showHide(className);
  }

  function DefaultOrientation(className) {
    setorientation("");
    params.delete("orientation");
    showHide(className);
  }

  // set default color
  function setDefaultColor(className) {
    params.delete("color");
    showHide(className);
  }
  // orientation list
  const orientations = [
    { id: "1", title: "landscape", value: "Landscape" },
    { id: "2", title: "portrait", value: "Portrait" },
    { id: "3", title: "square", value: "Square" },
  ];

  // Order By
  const relevents = [
    { id: "1", title: "relevant", value: "Relevant (Default)" },
    { id: "2", title: "latest", value: "Latest" },
  ];

  // Colors
  const colors = [
    { id: 1, value: "#fff", name: "white" },
    { id: 2, value: "#000", name: "black" },
    { id: 3, value: "#f3f70a", name: "yellow" },
    { id: 4, value: "#f78c0a", name: "orange" },
    { id: 5, value: "#f71a0a", name: "red" },
    { id: 6, value: "#f70adf", name: "purple" },
    { id: 7, value: "#0fad07", name: "green" },
    { id: 8, value: "#07d9bd", name: "teal" },
    { id: 9, value: "#071fd9", name: "blue" },
  ];

  return (
    <div className="filterBar">
      <div className="filters">
        <div className="orientation">
          <p onClick={() => dropdownEvent("orientation")}>
            Orientation <IoMdArrowDropdown />
          </p>
          <div className="dropdown">
            <ul>
              <li>
                <Link
                  to={{
                    pathname: url,
                  }}
                  className="marked"
                  onClick={() => DefaultOrientation("orientation")}
                >
                  Any Orientation
                </Link>
              </li>
              {orientations.map(({ id, value, title }) => (
                <li key={id}>
                  <Link
                    to={{
                      pathname: url,
                      search: qs.stringify({
                        ...queryParam,
                        orientation: title,
                      }),
                    }}
                    onClick={() =>
                      orientationHandler(id, title, "orientation", value)
                    }
                  >
                    {searchQuery.orientation === title && (
                      <GrFormCheckmark className="select" />
                    )}{" "}
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="any-colors">
          <p onClick={() => dropdownEvent("any-colors")}>
            Any Colors <IoMdArrowDropdown />
          </p>
          <div className="dropdown">
            <ul>
              <li
                onClick={() => setDefaultColor("any-colors")}
              >
                <GrFormCheckmark /> Any Color
              </li>
              <li onClick={() => searchByColor("black & white", "any-colors")}>
                Black & White
              </li>
              <li>Tones</li>
            </ul>
            <div className="colors">
              {colors.map(({ id, name, value }) => (
                <Link
                  to={{
                    pathname: url,
                    search: qs.stringify({ ...queryParam, color: name }),
                  }}
                  key={id}
                  onClick={() => searchByColor(name, "any-colors")}
                >
                  <Colors color={value} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="relevent">
          <p onClick={() => dropdownEvent("relevent")}>
            Sort By Relevent <IoMdArrowDropdown />
          </p>
          <div className="dropdown">
            <ul>
              {relevents.map(({ id, title, value }) => (
                <li key={id}>
                  <Link
                    to={{
                      pathname: url,
                      search: qs.stringify({ ...queryParam, order_by: title }),
                    }}
                    onClick={() => ByRelevent(title, "relevent", value)}
                  >
                    <span>
                      {searchQuery.order_by === title && (
                        <GrFormCheckmark className="select" />
                      )}
                    </span>
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
